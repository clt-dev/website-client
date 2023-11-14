import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

import reportWebVitals from './reportWebVitals';

import './assets/css/style.css';

declare global {
  interface Window {
    gtag: (type: string, title: string, data?: object) => void;
    lintrk: (type: string, data?: object) => void;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
reportWebVitals();
