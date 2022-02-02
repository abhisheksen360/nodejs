import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/dashforge.css';
import './assets/css/dashforge.dashboard.css';






import store from "./store";
import { Provider } from "react-redux";
store.subscribe(() =>console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals hello world 2nd 3rd 4th 5th 6th 7th 8th 9th 10 11th
reportWebVitals();
