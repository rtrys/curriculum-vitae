import React from 'react'

const Certificate = props => {
  return (
    <div className="Certificate">
      <div className="Certificate-container">
        {
          props.data.map((cert, index) => (
            <div className="Certificate-item" key={`cert-${index}`}>
              <h3>{cert.name} @ {cert.institution}</h3>
              <h4><span>{cert.date}</span></h4>
              <p>{cert.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Certificate
