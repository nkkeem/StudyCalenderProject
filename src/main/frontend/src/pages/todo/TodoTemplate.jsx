import React, { useState } from 'react';
import './components/TodoTemplate.scss';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';
import TodoTitle from './TodoTitle';
import styled from 'styled-components';
import './components/font.scss';

const Div = styled.div`
  font-family: 'SUITE-Regular';
`;

function TodoTemplate({ children }) {
  const [todo, setTodo] = useState([
    {
      id: 1,
      content: '리액트로 To Do List 만들기',
      checked: true,
    },
    {
      id: 2,
      content: '5kg 다이어트 하기',
      checked: false,
    },
    {
      id: 3,
      content: '운동 매일 가기',
      checked: true,
    },
  ]);

  return (
    <Div className="TodoTemplate">
      <TodoTitle title="TO DO LIST"></TodoTitle>
      <TodoInsert />
      <TodoItemList todos={todo} />
    </Div>
  );
}

export default TodoTemplate;