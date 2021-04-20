import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
