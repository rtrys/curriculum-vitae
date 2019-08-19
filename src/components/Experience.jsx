import React from 'react'

const Experience = props => {
  return (
    <div className="Experience">
      <div className="Experience-container">
        {
          props.data.map((exp, index) => (
            <div className="Expirience-item" key={`exp-${index}`}>
              <h3>{exp.jobTitle} @ {exp.company}</h3>
              <h4><span>{exp.startDate} - {exp.endDate}</span></h4>
              <p>{exp.jobDescription}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Experience
