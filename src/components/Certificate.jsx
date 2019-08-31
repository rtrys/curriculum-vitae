import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Certificate = props => {
  return (
    <div className="Certificate">
      <H2Styled>Certificates</H2Styled>
      <div className="Certificate-container">
        {
          props.data.map((cert, index) => (
            <div className="Certificate-item" key={`cert-${index}`}>
              <H3Styled>{cert.name} @ {cert.institution}</H3Styled>
              <H3Styled><span>{cert.date}</span></H3Styled>
              <PStyled>{cert.description}</PStyled>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Certificate
