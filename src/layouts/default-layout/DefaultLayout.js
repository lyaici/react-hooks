import React from 'react';
import './DefaultLayout.scss';
import { Route } from 'react-router-dom';
import { Navbar } from '../../components/default-layout';

const DefaultLayout = ({ component: Component, ...props}) => {
  return (
    <Route {...props} render={ matchProps => (
      <div className="default-layout">
        <Navbar></Navbar>
        <Component {...matchProps} ></Component>
      </div>
    )}/>
  );
}

export default DefaultLayout;
