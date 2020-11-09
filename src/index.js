import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// import App from "./views/App/App"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./views/Landing/Landing"
import VODCollection from "./views/VODCollection/VODCollection"
import DetailsPage from './views/DetailsPage/DetailsPage'
import NoMatch404 from './views/NoMatch404/NoMatch404'

import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={VODCollection} />
          <Route path="/movie" component={DetailsPage} />
          <Route path="*" component={NoMatch404} />
        </Switch>
      </ErrorBoundary>
    </Provider>
  </Router>,
  rootElement
);
