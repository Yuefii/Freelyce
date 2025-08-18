package models

type User struct {
	ID              uint   `gorm:"primaryKey" json:"id"`
	Name            string `json:"name"`
	Email           string `json:"email" gorm:"unique"`
	Password        string `json:"password"`
	BusinessName    string `json:"business_name"`
	BusinessAddress string `json:"business_address"`
	Phone           string `json:"phone"`
	Logo            string `json:"logo"`
}
