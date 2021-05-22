import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    from {
    transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
`;

const appear = keyframes`
    from {
    transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`;

const TechnologyContainer = styled.div`
  animation: ${appear} 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forward;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: inherit;
    padding: 0 25px;
    text-decoration: none;

    &:hover {
      animation: ${grow} 1s;
      font-weight: bold;
      animation-fill-mode: forwards;
    }

    svg {
      height: 200px;
      width: 200px;
    }
  }
`;

export default TechnologyContainer;
