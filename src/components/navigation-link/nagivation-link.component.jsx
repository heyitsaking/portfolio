import React from 'react';
import NavigationLinkComponent from './navigation-link.styles';

const NavigationLink = ({ text }) => {
  return (
    <NavigationLinkComponent
      to={text === 'home' ? '/portfolio' : `/${text}`}
    >
      {text.toUpperCase()}
    </NavigationLinkComponent>
  );
};

export default NavigationLink;
