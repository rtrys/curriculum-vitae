import React from 'react'
import Item from './Item'
import Title from './Title';

const Education = props => {
  return (
    <div className="Education">
      <div className="Education-container">
        <Title>Education</Title>
        {
          props.data.map((edu, index) => (
            <div className="Education-item" key={`edu-${index}`}>
              <Item
                name={edu.degree}
                place={edu.institution}
                date={`${edu.startDate} - ${edu.endDate}`}
                description={edu.description}
                />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Education
