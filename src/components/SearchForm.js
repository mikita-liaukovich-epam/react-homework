import React from "react";
import ReactDOM from "react-dom";
import VODCollection from "../views/VODCollection.View";
import ErrorBoundary from "../components/ErrorBoundary";
import { assetsPath, VODList } from "../models/VODCollection.DataModel";

function clickHandler(e) {
  e.preventDefault();

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <ErrorBoundary>
      <VODCollection assetsPath={assetsPath} VODList={VODList} />
    </ErrorBoundary>,
    rootElement
  );
}

export default function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="search-text"
      />
      <button type="submit" className="submit-button" onClick={clickHandler}>
        Search
      </button>
    </form>
  );
};
