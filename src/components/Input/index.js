import React from 'react';
import './input.css';

const Input = (props) => {
  return (
    <div className="input-group">
      <label>{props.label}</label>
      <input onChange={props.onChange} placeholder={props.placeholder} type={props.type}></input>
    </div>
  );
}

export default Input;
