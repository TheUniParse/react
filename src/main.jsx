import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Game from './game';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Game />
  </React.StrictMode>
);
