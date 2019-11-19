import React from 'react'
import Social from './Social';
import img from '../../public/img/perfil.jpg';

const About = ({ avatar, name, profession, bio, address, social }) => {
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-avatar">
          <figure>
            <img src={img} alt="{name}" className="About-img" />
          </figure>
          <div className="About-name">
            <h2>{name}</h2>
          </div>
          <div className="About-profession">
            <p>{profession}</p>
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
        </div>
      </div>
    </div>
  )
}

export default About
