package models

type User struct {
	ID              uint      `gorm:"primaryKey"`
	Name            string    `gorm:"size:100;not null"`
	Email           string    `gorm:"uniqueIndex;size:100;not null"`
	Password        string    `gorm:"size:255;not null"`
	BusinessName    string    `gorm:"size:255"`
	BusinessAddress string    `gorm:"size:255"`
	Phone           string    `gorm:"size:20"`
	Logo            string    `gorm:"size:255"`
	Invoices        []Invoice `gorm:"foreignKey:UserID"`
}
