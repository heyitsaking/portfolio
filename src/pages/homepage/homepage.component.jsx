import React from 'react';
import {
  HomePageContainer,
  AnimationContainer,
} from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <AnimationContainer>
        <div style={{ fontSize: '150px' }}>Arturo A. King</div>
        <div style={{ fontSize: '100px' }}>Web Developer</div>
      </AnimationContainer>
    </HomePageContainer>
  );
};

export default HomePage;
