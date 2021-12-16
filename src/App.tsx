import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import Theme from './styles/theme/'


function App() {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
      
    </Fragment>
  );
}

export default App;
