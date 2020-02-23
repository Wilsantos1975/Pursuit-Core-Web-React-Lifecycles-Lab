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
        tasks: [...prevState.tasks,task]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Form addTask={this.addTask}/>
        <TaskIndex tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
