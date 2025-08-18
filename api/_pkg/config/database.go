package config

import (
	"fmt"
	"freelyce/api/_pkg/models"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.SetPrefix("[ERROR] ")
		log.Fatal("failed to connect to database! \n", err)
	}

	log.SetPrefix("[INFO] ")
	log.Println("database connected...")
	db.AutoMigrate(&models.User{})

	DB = db
}
