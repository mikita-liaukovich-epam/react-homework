import React from "react"
import { useHistory } from "react-router-dom";

import './SearchForm.scss';

export default function SearchForm() {
  const history = useHistory();

  const clickHandler = (e) => {
    e.preventDefault()
    history.push(`search?value=${document.getElementById('searchField').value}`)
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
