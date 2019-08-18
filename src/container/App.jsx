import React from 'react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';

const App = () => {

  const data = useGetData();

  return (
    <div>
      <Main>
        <Sidebar>
          <About
            avatar={data.avatar}
            name={data.name}
            profession={data.profession}
            bio={data.bio}
            address={data.address}
            social={data.social}
          />
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