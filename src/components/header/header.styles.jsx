import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #1d2d50;
  font-size: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export default HeaderContainer;
