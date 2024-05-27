package database

import (
	"github.com/gofiber/fiber"
	"main.go/model"
)

func AddSponsors(c *fiber.Ctx){
	Sponsor:=model.Sponsor{}
	db:=ConnectDB()
	defer db.Close()
	if err:=c.BodyParser(&Sponsor); err!=nil{
		c.JSON("Failed to pass data")
	}
	db.AutoMigrate(&Sponsor)
	db.Create(&model.Sponsor{
		Name:Sponsor.Name,
		Type: Sponsor.Type,
		Apply: Sponsor.Apply,
	})
	c.JSON(Sponsor)
}

func ViewSponsors(c *fiber.Ctx){
	db :=ConnectDB()
	defer db.Close()
	AvailableSponsors := []model.Sponsor{}
	if err := db.Raw("SELECT * FROM sponsors").Scan(&AvailableSponsors).Error; err!=nil {
		c.Status(fiber.StatusInternalServerError).JSON(err)
	}
}