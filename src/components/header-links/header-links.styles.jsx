import styled from 'styled-components';

const HeaderLinksContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  justify-content: space-around;
  color: #fff;
  font-weight: 200;

  @media screen and (max-width: 800px) {
    padding: 0 5px;
  }
`;

export default HeaderLinksContainer;
