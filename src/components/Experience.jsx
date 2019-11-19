import React from 'react'
import Title from './Title'
import Item from './Item'

const Experience = props => {
  return (
    <div className="Experience">
      <div className="Experience-container">
        <Title>Experience</Title>
        {
          props.data.map((exp, index) => (
            <div className="Expirience-item" key={`exp-${index}`}>
              <Item
                name={exp.jobTitle}
                place={exp.company}
                date={`${exp.startDate} - ${exp.endDate}`}
                description={exp.jobDescription}
                />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Experience
