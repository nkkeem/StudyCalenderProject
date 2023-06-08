import React from 'react';
import './components/TodoTemplate.scss';
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";
import TodoTitle from "./TodoTitle";


function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <TodoTitle title="TO DO LIST"></TodoTitle>
      <TodoInsert />
      <TodoItemList />
    </div>
  );
}

export default TodoTemplate;