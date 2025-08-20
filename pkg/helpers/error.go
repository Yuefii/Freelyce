package helpers

import "strings"

func IsDuplicateKeyError(err error) bool {
	if err == nil {
		return false
	}
	msg := strings.ToLower(err.Error())

	if strings.Contains(msg, "duplicate entry") {
		return true
	}

	if strings.Contains(msg, "duplicate key value") {
		return true
	}

	return false
}
