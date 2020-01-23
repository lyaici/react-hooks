import React from 'react';
import '../node_modules/modern-css-reset/dist/reset.css';
import './styles/typography.scss';
import Router from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faPlus);

const App = () => {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
