import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const SocialStyled = styled.div`
  margin: 0 auto;
  display: block;
`;

const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`;

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
    <SocialStyled>
      {
        props.social &&
        <SocialUl>
          {
            props.social.map((social, index) => (
              <SocialLi key={`social-${index}`} target="_blank">
                <SocialAnchor href={social.url}>
                  <ThemeProvider theme={getColor(social.name)}>
                    <SocialIcon className={`fa fa-${social.name}`} />
                  </ThemeProvider>
                </SocialAnchor>
              </SocialLi>
            ))
          }
        </SocialUl>
      }
    </SocialStyled>
  )
}

export default Social
