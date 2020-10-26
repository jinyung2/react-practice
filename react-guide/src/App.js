import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'f23f3', name: "Jin", age: "28" },
      { id: '12rf34f', name: "Francesca", age: "20" },
      { id: 'vbav2r3', name: "Gary", age: "27" },
    ],
    otherState: "this is another state",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonsHandler = (index) => {
    // const persons = this.state.persons.slice(); // slice with no arguments copies array
    const persons = [...this.state.persons]; // es6 array copy
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}></Person>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'orangered',
      //   color: 'black'
      // }
    }

    const classes = []; // "red bold"

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App" >
        <h1>Hi I am a React App</h1>
        <p className={classes.join(' ')}>Welcome!</p>
        <button
          className="button"
          onClick={this.togglePersonsHandler}>
            Switch Name</button>
        {persons}
      </div>
    );
  }

  // return React.createElement('div', {className: "App"}, 
  // React.createElement('h1', null, "I'm a React App!!"));
}

export default App;
