import React from 'react';

const Task = ({task,id,deleteTask}) => {
    return (
        <>
        <li>{task}</li>
        <button className="button" id={id} onClick={deleteTask}>del</button>
        </>
    )

}




export default Task;