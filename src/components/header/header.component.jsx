import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../resources/logo-blue.svg';
import HeaderLinks from '../header-links/header-links.component';
import HeaderContainer from './header.styles';

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <HeaderContainer>
      {/* <Logo height="100%" width="10%" /> */}
      <HeaderLinks />
    </HeaderContainer>
  );
};

export default Header;
