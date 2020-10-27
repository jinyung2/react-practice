import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      { id: 'f23f3', name: "Jin", age: "28" },
      { id: '12rf34f', name: "Francesca", age: "20" },
      { id: 'vbav2r3', name: "Gary", age: "27" },
    ],
    otherState: "this is another state",
    showPersons: false,
    changeCounter: 0,
    auth: false
  };

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  componentDidMount() {

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter++,
      }
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

  loginHandler = () => {
    this.setState({ auth: true });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler}
        />
    }
    console.log(this.props);

    return (
      <React.Fragment>
        <AuthContext.Provider 
        value={{
          auth: this.state.auth, 
          login: this.loginHandler
          }}>
          <Cockpit
            title={this.props.appTitle}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            persons={this.state.persons}></Cockpit>
        {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }

}

export default withClass(App, classes.App);
