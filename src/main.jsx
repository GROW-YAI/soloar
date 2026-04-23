import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import BoafoWidgetInitializer from './component/BoafoWidgetInitializer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BoafoWidgetInitializer />
    <App />
  </StrictMode>,
);
