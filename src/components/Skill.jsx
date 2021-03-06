import React from 'react'
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { background-position: 0 0; }
  100%: { background-position: 50px 50px; }
`;

const SkillSpan = styled.span`
  display: block;
  height: 100%;
  width: ${ props => props.width };
  border-radius: 8px;
  background-color: #C2185B;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3) inset 0 -2px -6px rgba(0, 0, 0, 0.4);
  &:::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom 0;
    right: 0;
    background-image: linear-gradient(-45deg rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
    z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
    overflow: hidden;
  }
`;

const Skill = props => {
  return (
    <div className="Skill">
      <div className="Skill-container">
        {
          props.data.map((skill, index) => (
            <div className="Skill-item" key={`skill-${index}`}>
              <h5>{skill.name}</h5>
              <div className="Skill-line">
                <SkillSpan width={skill.percentage} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skill
