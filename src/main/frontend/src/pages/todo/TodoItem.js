import React from 'react';
import { CheckBox } from '@mui/icons-material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
`

const Content = styled.div`
  display: flex!important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

function TodoItem(props) {
  return (
    <Div>
      <CheckBox></CheckBox>
      <Content>Hooo</Content>
      <DeleteOutlinedIcon></DeleteOutlinedIcon>
    </Div>
  );
}

export default TodoItem;