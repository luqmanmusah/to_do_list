import React from "react"
import TodoList from "./TodoList";
import Header from "./Header"
import InputTodos from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false
          }
        ]
       };

       
    handleChange = id => {
        this.setState(prevState => {
            return {
              todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  }
                }
                return todo
              }),
            }
          })
      };
      
     delTodo = id => {
        console.log("deleted", id);
      };

      addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
      };

  render() {
    return (
      <div className="container">
        <div className="inner">
        <Header />
        <InputTodos addTodoProps={this.addTodoItem} />
        <TodoList 
        todos={this.state.todos} 
        handleChangeProps={this.handleChange} 
        deleteTodoProps={this.delTodo} />
       </div>
      </div>
        
        
    )
  }
}
export default TodoContainer;