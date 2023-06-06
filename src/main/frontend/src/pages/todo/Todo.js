import React from 'react';

import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";

function Todo() {
    return (
        <TodoTemplate>
            <TodoInsert />
        </TodoTemplate>
    );
}

export default Todo;