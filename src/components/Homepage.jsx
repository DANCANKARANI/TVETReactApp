import React from 'react'
import Navbar from "./navbar.jsx"
import {Home}  from './Home.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import {Courses} from './Courses.jsx';

import { Sponsors } from '../Sponsors.jsx';
import { Fee } from '../Fee.jsx';

import {Agriculture} from './Agriculture';
import jobs from "../jobs"
import { AvailableJobs } from '../Jobs.jsx';
{/*images*/}
import agric1 from './images/agric1.jpg'
import agric2 from './images/agric2.jpg'
import mechanical1 from './images/mechanical1.jpg'
import mechanical2 from './images/mechanical2.png'
import business1 from './images/business1.jpg'
import business2 from './images/business2.jpg'
import applied1 from './images/applied1.jpg'
import applied2 from './images/applied2.jpg'
import ict1 from './images/ict1.jpg'
import ict2 from './images/ict2.jpg'
import electrical1 from './images/electrical1.jpg'
import electrical2 from './images/electrical2.jpg'


export const Homepage = () => {
  return (
<div>
  <div>
    <Navbar/>
  </div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        
        <Route path="/careers" element={<Courses/>}/>


        <Route path="/jobs" element={jobs.map(available=>
        <AvailableJobs
          key={available.key}
          job={available.job}
          role={available.role}
          apply={available.apply}
        />)}/>


        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/fee" element={<Fee/>}/>
        {/*Agriculture department*/}
        <Route exact path='/careers/agric-dpt' element={<Agriculture
        introduction=" Agricultural and Environmental Studies Department"
        coursesdescription="The Agricultural and Environmental Studies Department, offers variety of courses and activities, which allow students to gain skills in agriculture, environmental science and technology, entrepreneurial Agriculture and Agribusiness, for the production, processing, management and marketing of agricultural commodities.

        The curriculum offers a one term attachment in the industrial field to ensure the students are fully exposed and this attachment is assessed by the teaching staff from the department."
        img1={agric1}
        img2={agric2}
        />}></Route>

         {/*Mechanical department*/}
        <Route path='/mechanical-dpt' element={<Agriculture
        introduction=" Mechanical Engineering Department"
        coursesdescription="The Agricultural and Environmental Studies Department, offers variety of courses and activities, which allow students to gain skills in agriculture, environmental science and technology, entrepreneurial Agriculture and Agribusiness, for the production, processing, management and marketing of agricultural commodities.

        The curriculum offers a one term attachment in the industrial field to ensure the students are fully exposed and this attachment is assessed by the teaching staff from the department."
        
        img1={mechanical1}
        img2={mechanical2}
        />}></Route>
        {/*Electrical department*/}
        <Route path='/electrical-dpt' element={<Agriculture
        introduction=" Electrical Engineering Department"
        coursesdescription="The Agricultural and Environmental Studies Department, offers variety of courses and activities, which allow students to gain skills in agriculture, environmental science and technology, entrepreneurial Agriculture and Agribusiness, for the production, processing, management and marketing of agricultural commodities.

        The curriculum offers a one term attachment in the industrial field to ensure the students are fully exposed and this attachment is assessed by the teaching staff from the department."
        
        img1={electrical1}
        img2={electrical2}
        />}></Route>

        {/*Business department*/}
        <Route path='/business-dpt' element={<Agriculture
        introduction=" Business Department"
        coursesdescription="The Agricultural and Environmental Studies Department, offers variety of courses and activities, which allow students to gain skills in agriculture, environmental science and technology, entrepreneurial Agriculture and Agribusiness, for the production, processing, management and marketing of agricultural commodities.

        The curriculum offers a one term attachment in the industrial field to ensure the students are fully exposed and this attachment is assessed by the teaching staff from the department."
        
        img1={business1}
        img2={business2}
        />}></Route>
         {/*Applied Sciences department*/}
        <Route path='/appliedsciences-dpt' element={<Agriculture
        introduction=" Applied Sciences Department"
        coursesdescription="The Agricultural and Environmental Studies Department, offers variety of courses and activities, which allow students to gain skills in agriculture, environmental science and technology, entrepreneurial Agriculture and Agribusiness, for the production, processing, management and marketing of agricultural commodities.

        The curriculum offers a one term attachment in the industrial field to ensure the students are fully exposed and this attachment is assessed by the teaching staff from the department."
        
        img1={applied1}
        img2={applied2}
        />}></Route>
        <Route path='/ict-dpt' element={<Agriculture
        introduction="Information And Conputing Technology Department"
        coursesdescription="The Agricultural and Environmental Studies Department, offers variety of courses and activities, which allow students to gain skills in agriculture, environmental science and technology, entrepreneurial Agriculture and Agribusiness, for the production, processing, management and marketing of agricultural commodities.

        The curriculum offers a one term attachment in the industrial field to ensure the students are fully exposed and this attachment is assessed by the teaching staff from the department."
        
        img1={ict1}
        img2={ict2}
        />}></Route>
      </Routes>
  <div>
    <Footer/>
  </div>
</div>
  )
}
