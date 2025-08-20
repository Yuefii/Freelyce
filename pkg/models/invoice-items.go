package models

type InvoiceItem struct {
	ID          uint    `gorm:"primaryKey"`
	InvoiceID   uint    `gorm:"not null"`
	Description string  `gorm:"size:255;not null"`
	Quantity    int     `gorm:"not null"`
	UnitPrice   float64 `gorm:"type:decimal(10,2);not null"`
}
