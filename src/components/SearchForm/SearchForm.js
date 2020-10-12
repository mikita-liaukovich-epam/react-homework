import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from '../../redux/store'
import VODCollection from "../../views/VODCollection/VODCollection"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import { assetsPath, VODList } from "../../models/VODCollection.DataModel"

import './SearchForm.scss';

function clickHandler(e) {
  e.preventDefault();

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <VODCollection assetsPath={assetsPath} VODList={VODList} />
      </ErrorBoundary>
    </Provider>,
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
