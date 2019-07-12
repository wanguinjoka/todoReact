import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    todos: [
      {
        id:1,
        title: 'meet bob',
        completed: false
      },
      {
        id:2,
        title: 'meet jane',
        completed: false
      },
      {
        id:3,
        title: 'get job',
        completed: false
      }
    ]
  }
}
//Task completed mark
markComplete = (id) =>{
  this.setState({todos:this.state.todos.map(todo =>{
    if(todo.id=== id){
      todo.completed = !todo.completed
    }
    return todo;
  })});
}
// delete tasks
delTodo = (id)=>{
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}
addTodo = (title) => {
  
}

  render(){
  
  return (
    <div className="App">
    <div className= 'container'>
    <Header />
    <AddTodo addTodo= {this.addTodo} />
    <Todos todos={this.state.todos}
           markComplete = {this.markComplete}
           delTodo = {this.delTodo}/>
    </div>
    </div>
  );
}
}

export default App;
