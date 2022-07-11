import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Section, ImgContainer } from './home-style';

const Home = () => {
  return (
    <Section id='home'>
      <ImgContainer>
        <Zoom>
          <h1>Uma dose de alegria no seu dia.</h1>
        </Zoom>
      </ImgContainer>
    </Section>
  );
};

export default Home;
