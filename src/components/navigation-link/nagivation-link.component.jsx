import React from 'react';
import NavigationLinkComponent from './navigation-link.styles';

const NavigationLink = ({ text }) => {
  return (
    <NavigationLinkComponent to={text === 'home' ? '' : `/${text}`}>
      {text.toUpperCase()}
    </NavigationLinkComponent>
  );
};

export default NavigationLink;
