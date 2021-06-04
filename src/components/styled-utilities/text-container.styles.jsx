import styled from 'styled-components';

const TextContainer = styled.div`
  font-size: ${(props) =>
    props.title
      ? '100px'
      : props.subtitle
      ? '70px'
      : props.body
      ? '40px'
      : ''};
`;

export default TextContainer;
