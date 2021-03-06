import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./css/style.css"
import "./css/toastr.min.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
