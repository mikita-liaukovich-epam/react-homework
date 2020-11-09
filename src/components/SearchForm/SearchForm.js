import React from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { searchMovie } from '../../redux/actions/Movie.actions'

import './SearchForm.scss';

export default function SearchForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault()
    const value = document.getElementById('searchField').value;
    history.push(`search?value=${value}`)
    dispatch(searchMovie(value));
  }

  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="search-text"
        id="searchField"
      />
      <button type="submit" className="submit-button" onClick={clickHandler}>
        Search
      </button>
    </form>
  );
};
