import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'

import App from './App.jsx';

// Use ReactDOM.render() instead of createRoot() if you're not using React 18
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
