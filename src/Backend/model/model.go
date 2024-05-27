package model

import "github.com/jinzhu/gorm"

type Job struct {
	gorm.Model
	Title 	string 	`json:"title"`
	Role  	string	`json:"role"`
	Apply	string	`json:"apply"`
}
type Sponsor struct{
	gorm.Model
	Name 	string	`json:"name"`
	Type 	string	`json:"type"`
	Apply	string	`json:"apply"`
}
type Department struct{
	gorm.Model
	Name 		string `json:"name"`
	Description string `json:"description"`
	Image1Url	string `json:"image1_url"`
	Image2Url	string `json:"image2_url"`
}

type Course struct{
	gorm.Model
	Level 			string `json:"level"`
	//DptID			uint64
	//Departmennts 	Departments `gorm:"foreignKey:DptID"`
	KcseGrade		string`json:"grade"`
	Subjects 		string `json:"subjects"`
}

type CourseDpt struct {
	gorm.Model
	DptID			uint	`json:"department_id"`
	Department 		Department `gorm:"foreignKey:DptID"`
	CourseID 		uint	`json:"course_id"`
	Course			Course	`gorm:"foreignKey:CourseID"`

}


type Student struct{
	ID 	uint64			`json:"-" gorm:"primaryKey;autoIncrement:true"`
	gorm.Model
	UserName 	string 	`json:"username"`
	Password 	string 	`json:"password"`
}
type Admin struct{
	ID 	uint64			`json:"-" gorm:"primaryKey;autoIncrement:true"`
	Email string		`json:"email"`
	Password string		`json:"password"`
}
