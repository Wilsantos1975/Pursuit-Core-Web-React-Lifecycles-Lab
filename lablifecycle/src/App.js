import React from "react";
import "./App.css";
import Form from "../src/components/form";
import TaskIndex from "./components/tasksIndex";

class App extends React.Component {
  state = { tasks: [] };

  addTask = task => {
    this.setState(prevState => {
      // let newArray = [...prevState.tasks];
      // newArray.push(task)
      return {
        tasks: [...prevState.tasks, task]
      };
    });
  };

  deleteTask = e => {
    let x = e.target.id;
    debugger
    this.setState(prevState => {
      prevState.tasks.splice(x,1); 
      return {
        tasks: prevState.tasks
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Form addTask={this.addTask} />
        <TaskIndex tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
