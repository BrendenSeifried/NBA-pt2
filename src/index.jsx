import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import App from './App';
import { ContextProvider } from './context/BasicContext';

render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
