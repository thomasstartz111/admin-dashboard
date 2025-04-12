import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the "root" div in public/index.html
);