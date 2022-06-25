import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '@public/styles/index.css';

const container = document.getElementById('app');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
