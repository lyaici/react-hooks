import React from 'react';
import './Button.scss';

const Button = ({ type = 'default', children }) => {
  return(
    <button className={`button ${type}`}>
      {children}
    </button>
  );
}

export default Button;
