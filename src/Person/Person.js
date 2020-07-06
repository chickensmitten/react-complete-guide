import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={this.switchNameHandler}>I'm a {props.name}! I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
};

export default person;