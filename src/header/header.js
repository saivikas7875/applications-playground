import './header.scss';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import country from '../country.png';
import {Navigation} from './navigation';

export const Header = () => {
    return (
        <AppBar color='primary' classes={{root: 'app-header'}}>
            <div className='header-content-wrapper'>
                <div className='header-content'>
                    <img src={country} className='App-logo' alt='logo' />
                    <div className='title'>Sai Vikas Gopal</div>
                </div>
                <Navigation />
            </div>
        </AppBar>
    );
};
