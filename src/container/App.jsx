import React from 'react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

const App = () => {
  return (
    <div>
      <Main>
        <Sidebar>
          <About></About>
        </Sidebar>
        <Info>
          <Education></Education>
          <Experience></Experience>
          <Certificates></Certificates>
          <Skills></Skills>
        </Info>
      </Main>
    </div>
  )
};

export default App;