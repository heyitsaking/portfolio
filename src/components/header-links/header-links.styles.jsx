import styled from 'styled-components';

export const HeaderLinksContainer = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: #fff;
  font-weight: 200;

  @media screen and (max-width: 800px) {
    padding: 0 5px;
    justify-content: flex-end;
  }
`;

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    height: 100%;
    width: auto;
  }
`;
