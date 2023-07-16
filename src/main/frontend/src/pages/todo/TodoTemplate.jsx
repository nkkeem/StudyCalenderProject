import React, { useState } from 'react';
import './components/TodoTemplate.scss';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';
import TodoTitle from './TodoTitle';
import styled from 'styled-components';
import './components/font.scss';
import {useCallback, useRef} from "react";

const Div = styled.div`
  font-family: 'SUITE-Regular';
`;

function TodoTemplate() {
  const [todos, setTodos] = useState([
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

  const nextId = useRef(4);
  // 배열에 항목이 추가되는 함수
  const onInsert = useCallback(
      (content) => {
        const todo = {
          id: nextId.current,
          content,
          checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current +=1;
        console.log(todos);
      },
      [todos],
  );

  const onRemove = useCallback(
      (id) => {
          setTodos(todos.filter((todo) => todo.id != id))
      }, [todos]
  );

  return (
    <Div className="TodoTemplate">
      <TodoTitle title="TO DO LIST"></TodoTitle>
      <TodoInsert todos={todos} setTodos={setTodos} onInsert={onInsert}/>
      <TodoItemList todos={todos} onRemove={onRemove}/>
    </Div>
  );
}

export default TodoTemplate;