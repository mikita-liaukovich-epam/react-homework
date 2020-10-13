import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./views/App/App"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import store from './redux/store'

import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  rootElement
);
