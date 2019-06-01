import './app.scss';
import React from 'react';
import {Countries} from './countries/countries';
import {CapitalQuizContainer} from './capital-quiz/capital-quiz-container';
import {Home} from './landing/home';
import {withTheme} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import {BrowserRouter, Route} from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000',
            light: '#2c2c2c',
            dark: '#000'
        },
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
                    <Route path='/capital-quiz' component={CapitalQuizContainer} />
                </div>
            </div>
        </MuiThemeProvider>
    </BrowserRouter>
);

export const AppRoot = withTheme()(AppBase);
