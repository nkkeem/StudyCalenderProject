import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  background: darkolivegreen;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoTitle(props) {
  return <StyledTitle>{props.title}</StyledTitle>;
}

export default TodoTitle;