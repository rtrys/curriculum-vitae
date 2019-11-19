import React from 'react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificate from '../components/Certificate';
import Skill from '../components/Skill';
import useGetData from '../hooks/useGetData';

const App = () => {

  const data = useGetData();

  return data.length === 0 ? <h1>cargando...</h1> : (
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
          <Education data={data.education} />
          <Experience data={data.experience} />
          <Certificate data={data.certificate} />
          <Skill data={data.skills} />
        </Info>
      </Main>
    </div>
  )
};

export default App;