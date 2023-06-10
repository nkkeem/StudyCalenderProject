import React from 'react';
import { CheckBox } from '@mui/icons-material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

const Div = styled.div`
  display: flex;
  height: 50px;
  outline: auto;
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
  flex: 1;
  svg{
    font-size: 1.5rem;
  }
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
  svg{
    font-size: 1.5rem;
  }
`;

const Button = styled.div``;

function TodoItem(props) {
  return (
    <Div className="TodoItem">
      {/*<CheckButton className="button">*/}
      {/*  <CheckBox fontSize={'large'} />*/}
      {/*</CheckButton>*/}
      <CheckButton className="checkBox">
        <MdCheckBoxOutlineBlank />
      </CheckButton>
      <Content>To do</Content>
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
