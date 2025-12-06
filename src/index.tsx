import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css';
import App from './app.tsx';
import BreakpointsProvider from './shared/providers/breakpoints/breakpoints.provider.tsx';
import ModalProvider from './shared/providers/modal/modal.provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BreakpointsProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BreakpointsProvider>
  </StrictMode>,
);
