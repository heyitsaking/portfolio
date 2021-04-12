import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
    from {
      margin-left: 0%;
      width: 300%;
      opacity: 0;
    }

    to {
      margin-left: 10%;
      width: 100%;
      opacity: 100%;
    }
`;

const slideInBottom = keyframes`
    from {
      margin-top: 30%;
      width: 100%;
      opacity: 0;
    }

    to {
      margin-bottom: 0%;
      width: 100%;
      opacity: 100%;
    }
`;

export const HomePageContainer = styled.div`
  animation: ${slideInBottom} 1s;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AnimatedTextContainer = styled.div`
  animation: ${slideInLeft} 3s
    ${(props) => (props.title ? '1.5s' : '1s')};
  animation-fill-mode: forwards;
  padding-top: ${(props) => (props.name ? '200px' : '')};
  opacity: 0;
  font-size: ${(props) => (props.title ? '70px' : '100px')};
`;
