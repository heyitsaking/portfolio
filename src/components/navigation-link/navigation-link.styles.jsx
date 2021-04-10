import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationLinkComponent = styled(Link)`
  display: block;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;

export default NavigationLinkComponent;
