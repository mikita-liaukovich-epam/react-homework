import React from 'react';
import { hydrate } from 'react-dom';

import App from './views/App/App';

if (typeof window !== 'undefined' && document) {

  const app = (
    <App />
  );

  hydrate(app, document.getElementById('root'));
}
