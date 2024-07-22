import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { stopReportingRuntimeErrors } from 'react-error-overlay';
import ErrorBoundary from './components/ErrorBoundary';
 

=======
import './i18n.js';
>>>>>>> a0acc62ca4ce896654f87a2ccfc9bffbbe340971



const root = ReactDOM.createRoot(document.getElementById('root'));
//stopReportingRuntimeErrors();
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);



reportWebVitals();
