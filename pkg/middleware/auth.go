package middleware

import (
	"freelyce/pkg/config"
	"freelyce/pkg/helpers"

	"github.com/gofiber/fiber/v2"
)

func Protected() fiber.Handler {
	return func(ctx *fiber.Ctx) error {
		tokenString := ctx.Get("Authorization")

		if tokenString == "" {
			helpers.LogError("mising authorization", nil)
			return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "missing authorization",
			})
		}

		if len(tokenString) > 7 && tokenString[:7] == "Bearer " {
			tokenString = tokenString[7:]
		}

		_, claims, err := config.ParseToken(tokenString)
		if err != nil {
			helpers.LogError("invalid or expired token: ", err)
			return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "invalid or expired token.",
			})
		}

		ctx.Locals("user_id", claims["user_id"])

		return ctx.Next()
	}
}
