import React from 'react'
import { Qualifications } from './Qualifications'
import '../index.css'
import description from '../map.js'
import Login  from '../Login.jsx'



export const Agriculture = (props) => {
  return (
    <div >
      <div className="introduction">
        {props.introduction}
      </div>
      <div className="agric-container">
        <div className="img1"><img src={props.img1} alt="dsd" /></div>
        <div className="img2"><img src={props.img2} alt="dsd" /></div>
      </div>
      <div className="course-description">
        {props.coursesdescription}
        </div>
        <div className="hook">
      <Login/>
    </div>
        {/*Arrow function calling the data from the qualification but we are passing the map data from map.js as props */}
      <div className="agricard">
        {description.map(desc=>< Qualifications 
        key={desc.key}
        level={desc.level}
        grade={desc.grade}
        subjects={desc.subjects}
        />
      )
    }
    
      </div>
  </div>
  )
}
