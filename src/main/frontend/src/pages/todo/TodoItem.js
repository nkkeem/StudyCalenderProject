import React from 'react';
import { CheckBox } from '@mui/icons-material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  height: 50px;
`;

const Content = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const CheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
`;

const Button = styled.div``;

function TodoItem(props) {
  return (
    <Div className="TodoItem">
      <CheckButton className="button">
        <CheckBox fontSize={'large'} />
      </CheckButton>
      <Content>Hooo</Content>
      <DeleteButton
        className="button"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DeleteOutlinedIcon fontSize={'large'}></DeleteOutlinedIcon>
      </DeleteButton>
    </Div>
  );
}

export default TodoItem;
