import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationLinkComponent = styled(Link)`
  display: block;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    border-bottom: solid #f9c80e;
  }
`;

export default NavigationLinkComponent;
