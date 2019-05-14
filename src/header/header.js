import './header.scss';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import country from '../country.png';

export const Header = () => {
  return (
    <AppBar color="primary" classes={{ root: 'app-header' }}>
      <div className="header-content">
        <div className="title">Countries</div>
        <img src={country} className="App-logo" alt="logo" />
      </div>
    </AppBar>
  );
};
