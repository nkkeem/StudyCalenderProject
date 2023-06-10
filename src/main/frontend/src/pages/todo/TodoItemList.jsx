import React from 'react';
import TodoItem from './TodoItem';

function TodoItemList({ todos }) {
  return (
    <div className="TodoItemList">
      {console.log(todos)}
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoItemList;
