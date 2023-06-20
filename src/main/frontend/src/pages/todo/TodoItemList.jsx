import React from 'react';
import TodoItem from './TodoItem';

function TodoItemList({ todos, onRemove }) {
  return (
    <div className="TodoItemList">
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} onRemove={onRemove}/>
      ))}
    </div>
  );
}

export default TodoItemList;
