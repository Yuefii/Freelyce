package dto

type SignUpRequest struct {
	Name     string `json:"name" validate:"required,min=3,max=50"`
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6"`
}

type SignInRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6"`
}

type ProfileUpdateRequest struct {
	Name            string `json:"name"`
	Email           string `json:"email"`
	BusinessName    string `json:"business_name"`
	BusinessAddress string `json:"business_address"`
	Phone           string `json:"phone"`
}
