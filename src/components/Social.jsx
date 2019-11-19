import React from 'react'
import styled, { ThemeProvider } from 'styled-components';

const SocialIcon = styled.i`
  color: ${ props => props.theme.color };
`;

const facebook = {
  color: "#3b5998",
};

const twitter = {
  color: "#38A1F3",
};

const linkedin = {
  color: "#0E76A8",
};

const github = {
  color: "#333",
};

const getColor = (name) => {
  switch (name) {
    case 'facebook': return facebook;
    case 'twitter': return twitter;
    case 'linkedin': return linkedin;
    case 'github': return github;
  }
};

const Social = props => {
  return (
    <div className="Social">
      {
        props.social &&
        <ul>
          {
            props.social.map((social, index) => (
              <li key={`social-${index}`} target="_blank">
                <a href={social.url}>
                  <ThemeProvider theme={getColor(social.name)}>
                    <SocialIcon className={`fa fa-${social.name}`} />
                  </ThemeProvider>
                </a>
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Social
