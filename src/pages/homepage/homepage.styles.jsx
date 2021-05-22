import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 70% }
`;

const cursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #F9C80E; }
`;

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10%;
  height: 100%;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: auto;
  border-right: 0.15em solid #f19a3e;
  animation: ${typing} 4s steps(29, end) 1s 1 normal both,
    ${cursor} 600ms steps(29, end) infinite;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.1em;
`;
