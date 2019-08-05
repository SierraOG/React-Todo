// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = props => {
    
    return (
        <>
            {props.todo.map((todo) => <Todo todo = {todo} />)}
        </>
    )
}

export default TodoList