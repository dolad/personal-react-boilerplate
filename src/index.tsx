import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ServiceWorker } from './components';
import { ServiceWorkerContext } from './context';
import './i18n';

render(
  <StrictMode>
    <ThemeProvider>
      <ColorModeProvider value="dark">
        <CSSReset />
        <ServiceWorkerContext>
          <ServiceWorker />
        </ServiceWorkerContext>
        <Router>
          <App />
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);