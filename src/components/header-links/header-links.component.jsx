import React from 'react';

import NavigationLink from '../navigation-link/nagivation-link.component';
import HeaderLinksContainer from './header-links.styles';

const HeaderLinks = () => {
  return (
    <HeaderLinksContainer>
      <NavigationLink text="home" />
      <NavigationLink text="about" />
      <NavigationLink text="portfolio" />
      <NavigationLink text="contact" />
    </HeaderLinksContainer>
  );
};

export default HeaderLinks;
