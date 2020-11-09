import React, { useCallback, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Landing from "../Landing/Landing"
import VODCollection from "../VODCollection/VODCollection"
import DetailsPage from '../../views/DetailsPage/DetailsPage'
import { Switch, Route } from "react-router-dom"

export default function App() {
  let { currentView } = useSelector((state) => state);

  const { data } = useSelector((state) => state)

  return <Switch>
    <Route path="/search">
      <VODCollection />
    </Route>
    <Route path="/">
      <Landing />
    </Route>
    <Route path="/movie">
      <DetailsPage />
    </Route>
  </Switch>
}

const rootElement = document.getElementById("root");
