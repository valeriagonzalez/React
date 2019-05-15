import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

import TodosForm from './components/TodosForm';

class App extends Component {
constructor() {
  super();
  this.state = {
    todos
  }
}

handleAddTodo(todos) {
  this.state({
    todos: [...this.state.todos]
  })
}
  render() {
  const todos =  this.state.todos.map((todos, i)  => {
    return (
      <div className="col-md-4">
        <div className="card mt-4">
            <div className="card-heder">
              <h3>{ todos.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
              { todos.prioridad }
              </span>
            </div>
          <div className="card-body">
            <p>{ todos.descripcion }</p>
            <p><mark>{ todos.responsable }</mark></p>
          </div>
        </div>
      </div>
    )
   } )

    return (
    <div className="App">

        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
                TAREAS
                <span className="badge badge-pill badge-light ml-2">
                  { this.state.todos.length }
                </span>
            </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <TodosForm/>
          </div>
         </div>
    </div>
    );
  }
}

export default App;
