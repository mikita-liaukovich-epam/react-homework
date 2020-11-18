import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from '../../redux/store'

import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary"
import Landing from "../Landing/Landing"
import VODCollection from "../VODCollection/VODCollection"
import DetailsPage from '../DetailsPage/DetailsPage'
import NoMatch404 from '../NoMatch404/NoMatch404'

import '../../index.scss'

export default function App() {
  return <Router>
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
    </Router>
}