import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@fontsource/lato';

import './index.css';
import App from './App.tsx';
import { BASE_NAME } from './consts.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={BASE_NAME || ''}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
