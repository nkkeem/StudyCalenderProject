import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from 'styled-components';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

const Div = styled.div`
  display: flex;
  height: 50px;
  &:hover {
    background: #eeeeee;
  }
`;

const Content = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  svg {
    font-size: 2rem;
  }
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  &:hover {
    svg {
      color: gray;
    }
  }
  &.deleteBox {
    svg {
      color: #ff6b6b;
      &:hover {
        color: red;
      }
    }
  }
`;

function TodoItem({todo}) {
  return (
    <Div className="TodoItem">
      <Button className="checkBox">
        <CheckBoxOutlineBlankOutlinedIcon />
      </Button>
      <Content>{todo.content}</Content>
      <Button className="deleteBox">
        <RemoveCircleOutlineRoundedIcon />
      </Button>
    </Div>
  );
}

export default TodoItem;