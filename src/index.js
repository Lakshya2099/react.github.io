import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const renderApp = () => {
  createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    // Hot module replacement
    renderApp();
  });
}

// Initial render
renderApp();
