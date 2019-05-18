import './app.scss';
import React from 'react';
import {Countries} from './countries/countries';
import {Home} from './landing/home';
import {withTheme} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';
import {BrowserRouter, Route} from 'react-router-dom';

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
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <div className='App'>
                <div className='app-content'>
                    <Route exact path='/' component={Home} />
                    <Route path='/countries' component={Countries} />
                </div>
            </div>
        </MuiThemeProvider>
    </BrowserRouter>
);

export const AppRoot = withTheme()(AppBase);
