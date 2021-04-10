import React from 'react';
import logo from '../../resources/logo.png';
import HeaderLinks from '../header-links/header-links.component';
import HeaderContainer from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <img alt="logo" src={logo} />
      <HeaderLinks />
    </HeaderContainer>
  );
};

export default Header;
