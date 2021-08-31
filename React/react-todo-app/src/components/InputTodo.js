import React, { Component } from "react"

class InputTodos extends Component {
    state = {
        title: ""
      };
      
      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
          });
        } else {
            alert("Please add task")
        }
        
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." 
        value={this.state.title} 
        className="input-text"
        name="title"
        onChange={this.onChange} />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodos;
