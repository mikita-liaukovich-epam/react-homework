import React from "react"
import { useDispatch } from 'react-redux'
import { searchMovie } from '../../redux/actions/Movie.actions'

import './SearchForm.scss';

export default function SearchForm() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault()
    dispatch(searchMovie(document.getElementById('searchField').value))
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
