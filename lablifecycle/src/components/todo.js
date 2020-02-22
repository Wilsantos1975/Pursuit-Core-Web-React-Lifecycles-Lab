import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {task:"hello"}
        
    }
    render(){
        return(
            <section>
                {this.state.task}
            </section>
        )
    }

}

export default Todo;