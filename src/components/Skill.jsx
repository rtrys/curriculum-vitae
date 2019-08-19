import React from 'react'

const Skill = props => {
  return (
    <div className="Skill">
      <div className="Skill-container">
        {
          props.data.map((skill, index) => (
            <div className="Skill-item" key={`skill-${index}`}>
              <h5>{skill.name}</h5>
              <div className="Skill-line">
                <span>{skill.percentage}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skill
