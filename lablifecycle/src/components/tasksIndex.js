import React from "react";
import Task from './taskShown';

// class Tasks extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { tasks: [] };
  //   }

//   handleTasksShown = () => {
//     const { tasks } = this.state;
//     return tasks.map(task => (
//       <button id="button" value={task.tasks}>
//         {task.tasks}
//       </button>
//     ));
//   };

//   render() {
//     // const { task } = this.state;
//     return <section>{this.handleTasksShown()}</section>;
//   }
// }

const TaskIndex = (props) => {
  return props.tasks.map((task,i) => {
    return <Task task={task} key={props.tasks}/> 
      
  })
}



export default TaskIndex;
