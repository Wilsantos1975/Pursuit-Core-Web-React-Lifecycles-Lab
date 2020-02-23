import React from 'react';

const Task = ({task}) => {
    return (
        <>
        <li>{task}</li>
        <button className="button">del</button>
        </>
    )

}




export default Task;