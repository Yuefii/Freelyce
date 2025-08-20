package handlers

import (
	"freelyce/pkg/config"
	"freelyce/pkg/dto"
	"freelyce/pkg/helpers"
	"freelyce/pkg/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func SignUp(ctx *fiber.Ctx) error {
	var req dto.SignUpRequest

	if err := ctx.BodyParser(&req); err != nil {
		helpers.LogError("signup | parse request body | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	if err := helpers.Validate.Struct(req); err != nil {
		validationErrors := helpers.FormatValidationError(err)
		helpers.LogError("signup | validation | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"errors": validationErrors,
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), 14)
	if err != nil {
		helpers.LogError("signup | hash password | failed", err)
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	user := models.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hashedPassword),
	}

	if err := config.DB.Create(&user).Error; err != nil {
		if helpers.IsDuplicateKeyError(err) {
			helpers.LogError("signup | duplicate email | conflict", err)
			return ctx.Status(fiber.StatusConflict).JSON(fiber.Map{
				"error": "email already registered",
			})
		}
		helpers.LogError("signup | create user in DB | failed", err)
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	helpers.LogInfo("signup | user registered | email=" + user.Email)

	resp := dto.SignUpResponse{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
	}

	return ctx.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "registered successfully",
		"data":    resp,
	})
}

func SignIn(ctx *fiber.Ctx) error {
	data := new(dto.SignInRequest)

	if err := ctx.BodyParser(data); err != nil {
		helpers.LogError("signin | parse request body | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	if err := helpers.Validate.Struct(data); err != nil {
		validationErrors := helpers.FormatValidationError(err)
		helpers.LogError("signin | validation | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"errors": validationErrors,
		})
	}

	var user models.User

	if err := config.DB.Where("email = ?", data.Email).First(&user).Error; err != nil {
		helpers.LogInfo("signin | login attempt failed | email=" + user.Email)
		return ctx.Status(fiber.StatusUnauthorized).
			JSON(fiber.Map{"error": "invalid email or password"})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(data.Password)); err != nil {
		helpers.LogInfo("signin | login attempt failed | email=" + user.Email)
		return ctx.Status(fiber.StatusUnauthorized).
			JSON(fiber.Map{"error": "invalid email or password"})
	}

	token, err := config.GenerateToken(user.ID)
	if err != nil {
		helpers.LogError("signin | generate token | failed", err)
		return ctx.SendStatus(fiber.StatusInternalServerError)
	}

	helpers.LogInfo("signin | user logged in | email=" + user.Email)
	return ctx.JSON(fiber.Map{"token": token})
}

func Profile(ctx *fiber.Ctx) error {
	userID := ctx.Locals("user_id")

	var user models.User

	if err := config.DB.First(&user, userID).Error; err != nil {
		helpers.LogError("profile | get user | not found", err)
		return ctx.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "data not found",
		})
	}

	resp := dto.ProfileResponse{
		ID:              user.ID,
		Name:            user.Name,
		Email:           user.Email,
		Phone:           user.Phone,
		Logo:            user.Logo,
		BusinessName:    user.BusinessName,
		BusinessAddress: user.BusinessAddress,
	}

	helpers.LogInfo("profile | retrieved | email=" + user.Email)
	return ctx.JSON(fiber.Map{
		"data": resp,
	})
}

func UpdateProfile(ctx *fiber.Ctx) error {
	userID := ctx.Locals("user_id")

	var req dto.ProfileUpdateRequest

	if err := ctx.BodyParser(&req); err != nil {
		helpers.LogError("update_profile | parse request body | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	if err := helpers.Validate.Struct(req); err != nil {
		validationErrors := helpers.FormatValidationError(err)
		helpers.LogError("update_profile | validation | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"errors": validationErrors,
		})
	}

	var user models.User

	if err := config.DB.First(&user, userID).Error; err != nil {
		helpers.LogError("update_profile | find user | not found", err)
		return ctx.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "data not found",
		})
	}

	if err := config.DB.Model(&user).Updates(req).Error; err != nil {
		helpers.LogError("update_profile | update user in DB | failed", err)
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	resp := dto.ProfileResponse{
		ID:              user.ID,
		Name:            user.Name,
		Email:           user.Email,
		Phone:           user.Phone,
		BusinessName:    user.BusinessName,
		BusinessAddress: user.BusinessAddress,
	}

	helpers.LogInfo("update_profile | success | email=" + user.Email)
	return ctx.JSON(fiber.Map{
		"data": resp,
	})
}

func ChangePassword(ctx *fiber.Ctx) error {
	userID := ctx.Locals("user_id")

	var req dto.ChangePasswordRequest

	if err := ctx.BodyParser(&req); err != nil {
		helpers.LogError("change_password | parse request body | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	if err := helpers.Validate.Struct(req); err != nil {
		validationErrors := helpers.FormatValidationError(err)
		helpers.LogError("change_password | validation | failed", err)
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"errors": validationErrors,
		})
	}

	var user models.User

	if err := config.DB.First(&user, userID).Error; err != nil {
		helpers.LogError("change_password | find user | not found", err)
		return ctx.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "user not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.OldPassword)); err != nil {
		helpers.LogInfo("change_password | wrong old password | email=" + user.Email)
		return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "old password is incorrect",
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.NewPassword), 14)
	if err != nil {
		helpers.LogError("change_password | hash new password | failed", err)
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	if err := config.DB.Model(&user).Update("password", string(hashedPassword)).Error; err != nil {
		helpers.LogError("change_password | update password in DB | failed", err)
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	helpers.LogInfo("change_password | success | email=" + user.Email)
	return ctx.JSON(fiber.Map{
		"message": "password updated successfully",
	})
}

func DeleteAccount(ctx *fiber.Ctx) error {
	userID := ctx.Locals("user_id")

	var user models.User

	if err := config.DB.First(&user, userID).Error; err != nil {
		helpers.LogError("delete_account | find user | not found", err)
		return ctx.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "data not found",
		})
	}

	if err := config.DB.Delete(&user).Error; err != nil {
		helpers.LogError("delete_account | delete user in DB | failed", err)
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	helpers.LogInfo("delete_account | success | email=" + user.Email)
	return ctx.JSON(fiber.Map{
		"message": "account deleted successfully",
	})
}
