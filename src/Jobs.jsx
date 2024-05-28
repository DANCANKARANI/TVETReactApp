import React from 'react'
import "./jobs.css"

export const AvailableJobs = (props) => {

  return (
    <div className='jobscomponent'>
      <div className="jobsheader">
          <div className='column'>
            Title
          </div>
          <div className='column'>
            Qualification
          </div>
          <div className='column'>
            Application link
          </div>
      </div>
      <div className="jobs">
      <div className="column one">
         {props.title}
        </div>
        <div className="column two">
          {props.role}
        </div>
        <div className="column three">
           <a href={props.apply}>Apply</a>
        </div>
      </div>
      
    </div>
  )
}
