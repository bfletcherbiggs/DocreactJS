import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Docs from './docs';
import './style.styl';
import '../node_modules/highlight.js/styles/ocean.css';

import registerServiceWorker from './registerServiceWorker';

render((
  <BrowserRouter>
    <Route path="/" component={Docs}/>
  </BrowserRouter>
),
  document.getElementById('root')
);
registerServiceWorker();
