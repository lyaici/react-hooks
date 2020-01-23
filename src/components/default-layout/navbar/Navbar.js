import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="logo">
      <NavLink className="link" to='/'>
        <h1>Todo.</h1>
      </NavLink>
      </div>
      <div className="links">
        <NavLink className="link" to='/credits'>Credits</NavLink>
      </div>
    </div>
  );
}

export default Navbar;