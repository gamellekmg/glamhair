import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { stopReportingRuntimeErrors } from 'react-error-overlay';
import ErrorBoundary from './components/ErrorBoundary';
 




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
