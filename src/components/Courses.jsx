import React from 'react'
import Headline from './Headline.jsx'
import './courses.css'
import { BrowserRouter as Router, Link, Routes,Route } from 'react-router-dom';

export const Courses = () => {
  return (
    <div><Headline/>
    <div >
    <div >
      <nav className="department-components">
        <div className="column-one department-card">
            <ul >
              <li>
                <Link to="/careers/agric-dpt">Agricultural Engineering </Link>
              </li>
              <li>
                <Link to="/business-dpt">Business and Management Studies</Link>
              </li>
            </ul>
        </div>
        <div className="column-two department-card">
        <ul>
              <li>
                <Link to="/mechanical-dpt">Mechanical Engineering </Link>
              </li>
              <li>
                <Link to="/electrical-dpt">Electrical & Electronics</Link>
              </li>
       </ul>
        </div>
        <div className="column-three department-card">
        <ul>
              <li>
                <Link to="/appliedsciences-dpt">Applied Sciences </Link>
              </li>
              <li>
                <Link to="/ict-dpt">Information Communication Technology</Link>
              </li>
            </ul>
        </div>
      </nav>
      <Routes>

      </Routes>
      </div>
    </div>
    </div>
  )
}
