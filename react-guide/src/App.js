import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Jin", age: "28" },
      { name: "Francesca", age: "20" },
      { name: "Gary", age: "27" },
    ],
    otherState: "this is another state"
  };


  switchNameHandler = (newName) => {
    console.log('clicked');
    // Don't do the below, BAD.
    // personsState.persons[0].name = "John";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Francesca", age: 20 },
        { name: "Gary", age: 27 },
      ],
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "JOHNMANDER", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "Gary", age: 27 },
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App" >
        <h1>Hi I am a React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("God")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Buddha")}>I like tennis.</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>I like cats.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like dope cars.</Person>
      </div>
    );
  }

  // return React.createElement('div', {className: "App"}, 
  // React.createElement('h1', null, "I'm a React App!!"));
}

export default App;
