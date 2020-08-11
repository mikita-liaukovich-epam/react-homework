import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './views/Landing.View';
import VODCollection from './views/VODCollection.View';
import ErrorBoundary from './models/ErrorBoundary';
import { assetsPath, VODList } from "./models/VODCollection.DataModel";

import './styles/index.scss';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <ErrorBoundary>
      <Landing />
    </ErrorBoundary>,
    rootElement
);

const submitButton = document.getElementById("submitButton");
submitButton.onclick = () => {
  ReactDOM.render(
      <ErrorBoundary>
        <VODCollection assetsPath={assetsPath} VODList={VODList}/>
      </ErrorBoundary>,
      rootElement
  );
}