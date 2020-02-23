import React from "react";

class Form extends React.Component {

    handleTaskSubmit = (e) => {
        e.preventDefault();
        this.setState({task : e.target.value})
    }

  render() {
    return (
      <form onSubmit={this.handleTaskSubmit}>
        <label> To Do
        <input type="text" placeholder="To Do List" />

        </label>
      </form>

    );
  }
  
}

export default Form;
