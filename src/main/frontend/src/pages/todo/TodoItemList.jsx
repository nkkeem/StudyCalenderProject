import React from 'react';
import TodoItem from './TodoItem';

function TodoItemList({ todos }) {
  return (
    <div className="TodoItemList">
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}

export default TodoItemList;
