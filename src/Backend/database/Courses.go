package database

import (
	"github.com/gofiber/fiber/v2"
	"main.go/model"
)

func AddCourses(c *fiber.Ctx)error{
	Course:=model.Course{}
	db :=ConnectDB()
	defer db.Close()

	if err:=c.BodyParser(&Course); err!=nil{
		c.JSON("Failed to parse data")
	}
	//Createso the table according the struct defination
	db.AutoMigrate(&Course)
	db.Create(&model.Course{
		Level: Course.Level,
		KcseGrade: Course.KcseGrade,
		Subjects: Course.Subjects,
	})
	return c.JSON(Course)
}

func ViewCourses(c *fiber.Ctx)error{
	AvailableCourses:=[]model.Course{}
	db:= ConnectDB()
	defer db.Close()
	if err := db.Raw("SELECT * FROM courses").Scan(&AvailableCourses).Error; err != nil{
		c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": err.Error()})
        return c.JSON(err)
	}
	return c.JSON(AvailableCourses)
}