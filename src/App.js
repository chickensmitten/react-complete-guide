import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28},
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState ] = useState('some other value');

  console.log(personsState, otherState)

  const switchNameHandler = (newName) => {
    // console.log("was clicked");
    //  DON'T DO THIS: this.state.persons[0].name = "Maximillian";
    setPersonsState({
      persons: [
        { name: newName, age: 28},
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });    
  }

  return (
    <div className="App">
      <h1>I'm New to React!</h1>
      <p>This is really working</p>
      <button onClick={() => switchNameHandler('Maximillian!!')}>Switch Name</button>
      <Person 
        name={ personsState.persons[0].name } 
        age={ personsState.persons[0].age } />
      <Person 
        name={ personsState.persons[1].name } 
        age={ personsState.persons[1].age }
        click={ switchNameHandler.bind(this, 'Max!') }
        changed={nameChangedHandler}>My hobbies include watching TV</Person>
      <Person 
        name={ personsState.persons[2].name } 
        age={ personsState.persons[2].age } />
    </div>
  );
}

export default app;

