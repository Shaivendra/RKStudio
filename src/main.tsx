
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create a root first
const root = createRoot(document.getElementById("root")!);
// Then render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
