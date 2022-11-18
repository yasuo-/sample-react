import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import '@aws-amplify/ui-react/styles.css';
import '@public/styles/index.css';

const container = document.getElementById('root');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
