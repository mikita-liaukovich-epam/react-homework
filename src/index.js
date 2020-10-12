import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Landing from "./views/Landing/Landing"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import store from './redux/store'
import VODCollection from "./views/VODCollection/VODCollection"
import { assetsPath, VODList } from "./models/VODCollection.DataModel"

import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Landing />
      {/* <VODCollection assetsPath={assetsPath} VODList={VODList} /> */}
    </ErrorBoundary>
  </Provider>,
  rootElement
);
