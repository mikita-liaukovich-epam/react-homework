import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './views/Landing.View';
import VODCollection from './views/VODCollection.View';
import ErrorBoundary from './models/ErrorBoundary';

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
        <VODCollection />
      </ErrorBoundary>,
      rootElement
  );
}