import React from "react";

class Form extends React.Component {
  state = { task: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          To Do
          <input
            type="text"
            placeholder="To Do List"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default Form;
