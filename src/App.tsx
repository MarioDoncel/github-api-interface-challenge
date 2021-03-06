import React, { Fragment, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import UserContext, { UserDataProvider } from './providers/userDataProvider';
import Router from './routes';
import Theme from './styles/theme/'


function App() {
  return (
      <ThemeProvider theme={Theme}>
        <UserDataProvider>
          <Router />
        </UserDataProvider>
      </ThemeProvider>
  );
}

export default App;
