import React, { useCallback, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Landing from "../Landing/Landing"
import VODCollection from "../VODCollection/VODCollection"
import DetailsPage from '../../views/DetailsPage/DetailsPage'
// import { assetsPath, VODList } from "./models/VODCollection.DataModel"

export default function App() {
  let { currentView } = useSelector((state) => state);

  const { data } = useSelector((state) => state)

  switch (currentView) {
    case 'VODCollection':
      return <VODCollection />
    case 'Landing': 
      return <Landing />
    case 'DetailsPage':
      return <DetailsPage />
    default:
      return <Landing />
  }
}

const rootElement = document.getElementById("root");
