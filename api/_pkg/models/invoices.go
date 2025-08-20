package models

import (
	"time"
)

type Invoice struct {
	ID            uint          `gorm:"primaryKey"`
	UserID        uint          `gorm:"not null"`
	InvoiceNumber string        `gorm:"size:50;uniqueIndex;not null"`
	ClientName    string        `gorm:"size:100;not null"`
	ClientEmail   string        `gorm:"size:100"`
	ClientPhone   string        `gorm:"size:20"`
	ClientAddress string        `gorm:"size:255"`
	Date          time.Time     `gorm:"not null"`
	DueDate       time.Time     `gorm:"not null"`
	Currency      string        `gorm:"size:10"`
	Tax           float64       `gorm:"type:decimal(10,2)"`
	ShippingFee   float64       `gorm:"type:decimal(10,2)"`
	Discount      float64       `gorm:"type:decimal(10,2)"`
	Total         float64       `gorm:"type:decimal(10,2)"`
	Status        string        `gorm:"size:50"`
	Items         []InvoiceItem `gorm:"foreignKey:InvoiceID"`
}
