import React from 'react'

const Education = props => {
  return (
    <div className="Education">
      <div className="Education-container">
        {
          props.data.map((edu, index) => (
            <div className="Education-item" key={`edu-${index}`}>
              <h3>{edu.degree} @ {edu.institution}</h3>
              <h4><span>{edu.startDate} - {edu.endDate}</span></h4>
              <p>{edu.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Education
