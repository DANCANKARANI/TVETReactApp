package database

import (
	"github.com/gofiber/fiber"
	"main.go/model"
)
func AddJobs(c *fiber.Ctx){
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
	
	c.JSON(Job)
}
func ViewJobs(c *fiber.Ctx){
	AvailableJobs := []model.Job{}
	db :=ConnectDB()
	defer db.Close()
	if err :=db.Raw("SELECT * FROM jobs").Scan(&AvailableJobs).Error; err != nil {
		c.Status(fiber.StatusInternalServerError).JSON(err)
	}
	c.JSON(AvailableJobs)
}