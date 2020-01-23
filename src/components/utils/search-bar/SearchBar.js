import React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ placeholder, input }) => {


  return(
    <div className="search-bar">
      <FontAwesomeIcon className="fa" icon="search" size="1x" color="#595959"/>
      <input className="input" placeholder={placeholder} onChange={input}></input>
    </div>
  );
}

export default SearchBar;