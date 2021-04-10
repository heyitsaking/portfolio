import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import NavigationLink from '../navigation-link/nagivation-link.component';
import HeaderLinksContainer from './header-links.styles';

const HeaderLinks = () => {
  return (
    <HeaderLinksContainer>
      <Router>
        <NavigationLink text="home" />
        <NavigationLink text="about" />
        <NavigationLink text="portfolio" />
        <NavigationLink text="contact" />
      </Router>
    </HeaderLinksContainer>
  );
};

export default HeaderLinks;
