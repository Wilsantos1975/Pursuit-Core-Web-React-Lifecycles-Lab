import React from 'react';
import './App.css';
import Form from '../src/components/form'
import Tasks from './components/tasksIndex';


class App extends React.Component {
  state = {tasks: ["laundry"]};
    handleAddTasks = (task) => {

      this.setState()

    }
    render () {
      return ( 
        <div className="App">
          <Tasks />
          <Form />

        </div>
      )
    };

}


export default App;
