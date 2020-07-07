import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: '1', name: "Max", age: 28},
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  });

  const [otherState, setOtherState ] = useState('some other value');

  console.log(personsState, otherState)

  const nameChangedHandler = (event, id ) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons});    
  }

  const deletePersonHandler = (personIndex) => {
    // slice without arguments simply copies the array
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    console.log('hf',persons);
    
    setPersonsState({persons: persons});
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({...personsState, showPersons: !doesShow});
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        { personsState.persons.map((person, index) => {
          return <Person
            onClick={() => deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => nameChangedHandler(event, person.id)} />
        })}
      </div>
    );

    style.backgroundColor = 'red'
  }

  return (
    <div className="App">
      <h1>I'm New to React!</h1>
      <p>This is really working</p>
      <button 
        style={style}
        onClick={togglePersonsHandler}>Switch Name</button>
      {persons}
    </div>
  );
}

export default app;

