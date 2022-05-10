import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import PageRouter from './PagesRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <PageRouter />
  </BrowserRouter>
  </React.StrictMode>
);

