import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state  = {
    persons: [
      { name: "Max", age: 28},
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log("was clicked");
    //  DON'T DO THIS: this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        { name: "Maximillian", age: 28},
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>I'm New to React!</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My hobbies include watching TV</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );
  }
}

export default App;
