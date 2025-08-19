package api

import (
	"freelyce/api/_pkg/config"
	"freelyce/api/_pkg/handlers"
	"freelyce/api/_pkg/middleware"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	app := fiber.New()

	allowOrigins := os.Getenv("ALLOW_ORIGINS")
	if allowOrigins == "" {
		allowOrigins = "*"
	}

	config.ConnectDB()

	api := app.Group("/api")
	{
		auth := api.Group("/auth")
		{
			auth.Post("/sign-up", handlers.SignUp)
			auth.Post("/sign-in", handlers.SignIn)
			auth.Get("/profile", middleware.Protected(), handlers.Profile)
			auth.Patch("/profile", middleware.Protected(), handlers.UpdateProfile)
			auth.Patch("/change-password", middleware.Protected(), handlers.ChangePassword)
			auth.Delete("/profile", middleware.Protected(), handlers.DeleteAccount)
		}
	}

	adaptor.FiberApp(app).ServeHTTP(w, r)
}
