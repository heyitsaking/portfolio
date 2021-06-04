import React from 'react';

import NavigationLink from '../navigation-link/nagivation-link.component';
import {
  HeaderLinksContainer,
  HamburgerMenuContainer,
} from './header-links.styles';
import { ReactComponent as MenuIcon } from './menu-icon.svg';

const HeaderLinks = () => {
  return (
    <HeaderLinksContainer>
      <NavigationLink text="home" />
      <NavigationLink text="about" />
      <NavigationLink text="projects" />
      <NavigationLink text="contact" />
      <HamburgerMenuContainer>
        <MenuIcon />
      </HamburgerMenuContainer>
    </HeaderLinksContainer>
  );
};

export default HeaderLinks;
