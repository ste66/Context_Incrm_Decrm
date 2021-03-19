import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// FOR THE 2ND (List)Project
// import {MyProvider}from "./Context"
// import App from "./App"

// For the Class Project
import App from "./Component/App"

ReactDOM.render(
  //  <MyProvider>
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
//  </MyProvider>
,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
