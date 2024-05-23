
import React from 'react'
import  '../index.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './images/logo.jpg';





export default function Navbar() {
  return (
    <div className="container">
      <nav className="nav-bar">
        {/* ... rest of your code */}
        <div>
            <Link to='/'>
              <img src={logo} alt="logo" />
              </Link>
          </div>
          <div>
            <Link to='/'>HOME</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/sponsors'>Sponsors</Link>
            <Link to='/jobs'>Jobs</Link>
            <Link to='/fee'>Fee</Link>
          </div>
      </nav>
    </div>
  );
}
