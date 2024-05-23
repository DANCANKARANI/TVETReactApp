import React from 'react'
import homepageImage from './images/homepage.jpg';
import principal from  './images/principal.jpg';
export const Home = () => {
  return (
    <div className="homepage">
          <div className='homepage-image'>
            <img src={homepageImage} alt="img" />
            
          </div>
          <div className="homepage-message">
          <div className="message">
          Welcome to SkillCraft Institute, where innovation meets opportunity. We are dedicated to empowering individuals with practical skills and knowledge essential for thriving in today's dynamic workforce. Our comprehensive programs offer hands-on training in a variety of fields, from technology and engineering to healthcare and business. Whether you're a recent high school graduate, a career changer, or someone looking to upskill, SkillCraft Institute provides a supportive learning environment tailored to your needs. Join us in shaping the future of industries and unlocking endless possibilities for success.
          </div>
          <div className="message-images">
            <div className="principal-icon"></div>
            <img src={principal} alt="Principal" id='principal' />
            <span class="label">Margaret James -Chief Principal</span>
          </div>
          </div>
      </div>
  )
}
