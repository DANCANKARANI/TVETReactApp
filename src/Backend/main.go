package main

import (
	"fmt"

	"github.com/gofiber/fiber"
	"main.go/database"
)

func main() {

	fmt.Println("connected")
	app := fiber.New()
	//Post requests
	app.Post("/me",database.AddJobs)
	app.Post("/add-sponsors",database.AddSponsors)
	app.Post("/add-courses",database.AddCourses)
	app.Post("/add-departments",database.AddDepartments)
	
	
	//Get requests
	app.Get("/view/jobs",database.ViewJobs)
	app.Get("/view/departments",database.ViewDepartments)
	app.Get("/view/courses",database.ViewCourses)
	app.Get("/view/sponsors",database.ViewSponsors)

	app.Listen(":5173")
}