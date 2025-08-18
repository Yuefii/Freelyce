package helpers

import "github.com/go-playground/validator/v10"

var Validate = validator.New()

func FormatValidationError(err error) map[string]string {
	errors := make(map[string]string)

	if errs, ok := err.(validator.ValidationErrors); ok {
		for _, e := range errs {
			field := e.Field()
			switch e.Tag() {
			case "required":
				errors[field] = "is required"
			case "email":
				errors[field] = "must be a valid email"
			case "min":
				errors[field] = "must be at least " + e.Param() + " characters"
			case "max":
				errors[field] = "must be at most " + e.Param() + " characters"
			default:
				errors[field] = "is invalid"
			}
		}
	} else {
		errors["error"] = err.Error()
	}

	return errors
}
