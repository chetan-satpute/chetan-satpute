import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Only the build prerenders the page; the dev server serves an empty root.
if (import.meta.env.DEV) createRoot(container).render(app);
else hydrateRoot(container, app);
