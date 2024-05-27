package database

import (
	"github.com/gofiber/fiber/v2"
	"main.go/model"
)
func AddDepartments(c *fiber.Ctx)error{
	Department:=model.Department{}
	db:=ConnectDB()
	defer db.Close()
	if err:=c.BodyParser(&Department);err!=nil{
		c.JSON("Failde to parse data")
	}
	db.AutoMigrate(&Department)
	db.Create(&model.Department{
		Name: Department.Name,
		Description: Department.Description,
		Image1Url: Department.Image1Url,
		Image2Url: Department.Image2Url,
	})
	return c.JSON(Department)
}
func ViewDepartments(c *fiber.Ctx)error{
	AvailableDepartments :=[]model.Department{}
	db :=ConnectDB()
	defer db.Close()
	if err := db.Raw("SELECT * FROM departments").Scan(&AvailableDepartments).Error; err != nil{
		c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error":err.Error()})
		return c.JSON(err)
	}
	return c.JSON(AvailableDepartments)
}