import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  font-weight: 300;
  margin: .5em 0 1.2em 0;
  color: #757575;
`;

const PStyled = ({ children }) => <StyledP>{children}</StyledP>;

export default PStyled
