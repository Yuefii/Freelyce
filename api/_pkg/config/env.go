package config

import (
	"log"

	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.SetPrefix("[ERROR] ")
		log.Println("failed to load .env, fallback ke system env")
	}
}
