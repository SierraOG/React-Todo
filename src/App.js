import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './components/TodoComponents/Todo.css'

// const exampleTodoArray = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: JSON.parse(localStorage.getItem('todolist'))
    }
  }

  AddTodo = text => {
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
    localStorage.setItem('todolist',JSON.stringify([...this.state.todo, newTodo]))
  }

  ClearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(todoItem => !todoItem.completed)
    });
    localStorage.setItem('todolist',JSON.stringify( this.state.todo.filter(todoItem => !todoItem.completed)))
  }

  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          })
        }
        else {
          return item
        }
      })
    })

    localStorage.setItem('todolist',JSON.stringify(this.state.todo.map(item => {
      if (item.id === id) {
        return ({
          ...item,
          completed: !item.completed
        })
      }
      else {
        return item
      }
    })))
  }

  render() {
    return (
      <>
        <h1>Todo List</h1>
        <TodoForm AddTodo = {this.AddTodo}/>
        <TodoList 
          todo={this.state.todo} 
          toggleCompleted={this.toggleCompleted} 
          ClearCompleted = {this.ClearCompleted}
        />
      </>
    );
  }
}

export default App;
