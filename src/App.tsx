import React from 'react';
import AppRoutes from './routes'

import GlobalStyles from './styles/global';

function App() {
  return (
    <div data-testid="app">
      <AppRoutes/>
      <GlobalStyles />
    </div>
  );
}

export default App;
