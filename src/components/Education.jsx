import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Education = props => {
  return (
    <div className="Education">
      <H2Styled>Education</H2Styled>
      <div className="Education-container">
        {
          props.data.map((edu, index) => (
            <div className="Education-item" key={`edu-${index}`}>
              <H3Styled>{edu.degree} @ {edu.institution}</H3Styled>
              <H3Styled><span>{edu.startDate} - {edu.endDate}</span></H3Styled>
              <PStyled>{edu.description}</PStyled>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Education
