import React from "react";
import Task from './taskShown';


const TaskIndex = (props) => {
  return props.tasks.map((task,i) => {
    return <Task task={task} key={task}/> 
      
  })
}



export default TaskIndex;
