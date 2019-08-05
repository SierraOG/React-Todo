// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = props => {
    
    return (
        <>
            {props.todo.map((todo) => <Todo todo = {todo} toggleCompleted={props.toggleCompleted}/>)}
            <button className="clear-btn" onClick={props.ClearCompleted}>
            Clear Completed
            </button>
        </>
    )
}

export default TodoList