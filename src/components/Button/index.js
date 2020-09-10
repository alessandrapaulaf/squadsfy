import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
}

export default Button;