import './App.css';
import React from 'react';
import { Header } from './header/header';
import { Countries } from './countries/countries';
import { withTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepOrange
  },
  status: {
    danger: 'orange'
  },
  typography: {
    useNextVariants: true
  }
});

export const AppBase = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Countries />
    </div>
  </MuiThemeProvider>
);

export const AppRoot = withTheme()(AppBase);
