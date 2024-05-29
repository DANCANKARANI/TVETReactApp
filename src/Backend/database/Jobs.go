package database

import (


	"github.com/gofiber/fiber/v2"
	"main.go/model"
)
func AddJobs(c *fiber.Ctx)error{
	Job:=model.Job{}
	db:=ConnectDB()
	defer db.Close()
	//parsing the data through input form
	if err:=c.BodyParser(&Job);err!=nil{
		c.JSON("Failed to pass data")
	}
	//Automigrate add the necessary fields to the tables
	db.AutoMigrate(&Job)
	//Creats a bew entry to the table
	db.Create(&model.Job{
		Title: Job.Title,
		Role:Job.Role,
		Apply: Job.Apply,
	})
	//creating the table in the database
	
	return c.JSON(Job)
}
func ViewJobs(c *fiber.Ctx)error{
	AvailableJobs := []model.Job{}
	db :=ConnectDB()
	defer db.Close()
	if err :=db.Raw("SELECT * FROM jobs SORT").Scan(&AvailableJobs).Error; err != nil {
		c.Status(fiber.StatusInternalServerError).JSON(err)
	}
	return c.JSON(AvailableJobs)
}
func UpdateJobs(c *fiber.Ctx)error{
	id :=c.Params("id")
	Job:=model.Job{}
	if err:=c.BodyParser(&Job);err!=nil{
		c.JSON("Failed to pass data")
	}

	db :=ConnectDB()
	defer db.Close()
	db.Model(&Job ).Where("id=?",id).Update(&model.Job{
		Title: Job.Title,
		Role: Job.Role,
		Apply: Job.Apply,
	})
	return c.JSON(Job)
}
