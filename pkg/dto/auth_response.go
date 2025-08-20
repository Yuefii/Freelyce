package dto

type SignUpResponse struct {
	ID    uint   `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type ProfileResponse struct {
	ID              uint   `json;"id"`
	Name            string `json:"name"`
	Email           string `json:"email" gorm:"unique"`
	BusinessName    string `json:"business_name"`
	BusinessAddress string `json:"business_address"`
	Phone           string `json:"phone"`
	Logo            string `json:"logo"`
}
