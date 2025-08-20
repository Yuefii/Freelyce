package helpers

import (
	"log"
)

func LogInfo(msg string) {
	log.Printf("[INFO]: %s\n", msg)
}

func LogError(msg string, err error) {
	log.Printf("[ERROR]: %s | %v\n", msg, err)
}
