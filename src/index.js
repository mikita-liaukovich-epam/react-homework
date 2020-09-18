import React from "react";
import ReactDOM from "react-dom";
import Landing from "./views/Landing.View";
import ErrorBoundary from "./components/ErrorBoundary";
import VODCollection from "./views/VODCollection.View";
import { assetsPath, VODList } from "./models/VODCollection.DataModel";

import "./styles/index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ErrorBoundary>
    <Landing />
    {/* <VODCollection assetsPath={assetsPath} VODList={VODList} /> */}
  </ErrorBoundary>,
  rootElement
);
