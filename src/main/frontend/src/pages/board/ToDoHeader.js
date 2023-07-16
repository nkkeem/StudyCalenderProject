import React from 'react'

const TodoHead = ({value}) => {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done)
    console.log({value})
    const dateString = value.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = value.toLocaleDateString('ko-KR', {
        weekday: 'long'
    });
  return (
    <div>
    </div>
  )
}

export default TodoHead;