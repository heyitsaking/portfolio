import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
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

export const HomePageContainer = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AnimatedTextContainer = styled.div`
  animation: ${slideIn} 3s ${(props) => (props.title ? '1s' : '')};
  animation-fill-mode: forwards;
  padding-top: ${(props) => (props.name ? '200px' : '')};
  opacity: 0;
  font-size: ${(props) => (props.title ? '70px' : '100px')};
`;
