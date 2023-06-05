import React from 'react';

import TodoTemplate from "./toDoTemplate";
import TodoInsert from "./toDoInsert";

function Todo() {
    return (
        <TodoTemplate>
            <TodoInsert />
        </TodoTemplate>
    );
}

export default Todo;