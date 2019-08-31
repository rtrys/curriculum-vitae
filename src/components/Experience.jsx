import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Experience = props => {
  return (
    <div className="Experience">
      <H2Styled>Expirence</H2Styled>
      <div className="Experience-container">
        {
          props.data.map((exp, index) => (
            <div className="Expirience-item" key={`exp-${index}`}>
              <H3Styled>{exp.jobTitle} @ {exp.company}</H3Styled>
              <H3Styled><span>{exp.startDate} - {exp.endDate}</span></H3Styled>
              <PStyled>{exp.jobDescription}</PStyled>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Experience
