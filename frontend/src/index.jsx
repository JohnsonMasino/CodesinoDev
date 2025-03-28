import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';

import '@fontsource/dancing-script';
import '@fontsource/great-vibes';
import '@fontsource/playfair-display';
import '@fontsource/cardo';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);