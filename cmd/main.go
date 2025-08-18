package main

import (
	"freelyce/api/_pkg/config"
	"freelyce/api/_pkg/handlers"
	"freelyce/api/_pkg/middleware"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	allowOrigins := os.Getenv("ALLOW_ORIGINS")
	if allowOrigins == "" {
		allowOrigins = "*"
	}

	app.Use(cors.New(cors.Config{
		AllowOrigins:     allowOrigins,
		AllowMethods:     "GET,POST,PUT,PATCH,DELETE,OPTIONS",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		ExposeHeaders:    "Content-Length",
		AllowCredentials: true,
	}))

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

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(app.Listen(":" + port))
}
