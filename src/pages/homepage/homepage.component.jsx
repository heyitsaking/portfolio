import React from 'react';
import {
  HomePageContainer,
  AnimatedTextContainer,
} from './homepage.styles';
import waves from '../../resources/wave.svg';

const HomePage = () => {
  return (
    <HomePageContainer bg={waves}>
      <AnimatedTextContainer name>
        Arturo A. King
      </AnimatedTextContainer>
      <AnimatedTextContainer title>
        Web Developer
      </AnimatedTextContainer>
    </HomePageContainer>
  );
};

export default HomePage;
