package database

import (
	"github.com/gofiber/fiber/v2"
	"main.go/model"
)

func AddSponsors(c *fiber.Ctx)error{
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
	return c.JSON(Sponsor)
	
}

func ViewSponsors(c *fiber.Ctx)error{
	db :=ConnectDB()
	defer db.Close()
	AvailableSponsors := []model.Sponsor{}
	if err := db.Raw("SELECT * FROM sponsors").Scan(&AvailableSponsors).Error; err!=nil {
		return c.Status(fiber.StatusInternalServerError).JSON(err)
	}
	return c.JSON(AvailableSponsors)
}