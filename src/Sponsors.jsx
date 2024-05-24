import React from 'react'
import './jobs.css'
export const Availablesponsors = (props) => {
  return (
    <div className='jobscomponent'>
      <div className="jobsheader">
          <div className='column'>
            Sponsor
          </div>
          <div className='column'>
            Type of Sponsorship
          </div>
          <div className='column'>
            Application link
          </div>
      </div>
      <div className="jobs">
      <div className="column one">
         {props.name}
        </div>
        <div className="column two">
          {props.type}
        </div>
        <div className="column three">
           <a href={props.apply}>Apply</a>
        </div>
      </div>
      
    </div>
  )
}
