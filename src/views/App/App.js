import React, { useCallback, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Landing from "../Landing/Landing"
import VODCollection from "../VODCollection/VODCollection"
// import { assetsPath, VODList } from "./models/VODCollection.DataModel"

export default function App() {
  let { currentView } = useSelector((state) => state.viewData);

  const { data } = useSelector((state) => state.viewData)

  useEffect(() => {
    if (data && data.length > 0) {
      console.warn('datadata', data)
    }
  }, [data]);

  console.log('View is', currentView, data)
  switch (currentView) {
    case 'VODCollection':
      return <VODCollection />
    case 'Landing': 
      return <Landing />
    default:
      return <Landing />
  }
}

const rootElement = document.getElementById("root");
