import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../layouts';
import { Home, Credits } from '../views';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path='/' component={Home}></DefaultLayout>
        <DefaultLayout exact path='/credits' component={Credits}></DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;