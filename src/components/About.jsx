import React from 'react'
import Social from './Social';
import styled from 'styled-components';
import img from '../../public/img/perfil.jpg';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #E91E63;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #c2185b;
`;

const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #c21858;
`;

const About = ({ avatar, name, profession, bio, address, social }) => {
  return (
    <AboutStyle>
      <div className="About-container">
        <AboutAvatar className="About-avatar">
          <figure>
            <AboutImg src={img} alt="{name}" />
          </figure>
          <AboutName>
            <AboutH2>{name}</AboutH2>
          </AboutName>
          <div className="About-profession">
            <AboutProfession>{profession}</AboutProfession>
          </div>
          <div className="About-description">
            <p>{bio}</p>
          </div>
          <div className="About-location">
            <p>{address}</p>
          </div>
          <div className="About-social">
            <Social social={social} />
          </div>
        </AboutAvatar>
      </div>
    </AboutStyle>
  )
}

export default About
