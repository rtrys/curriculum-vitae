import React from 'react'
import Title from './Title'
import Item from './Item'

const Certificate = props => {
  return (
    <div className="Certificate">
      <div className="Certificate-container">
      <Title>Certificates</Title>
        {
          props.data.map((cert, index) => (
            <div className="Certificate-item" key={`cert-${index}`}>
              <Item
                name={cert.name}
                place={cert.institution}
                date={cert.date}
                description={cert.description}
                />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Certificate
