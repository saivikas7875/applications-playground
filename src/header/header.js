import './header.scss';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import country from '../country.png';
import {Link} from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

export const Header = props => {
    return (
        <AppBar color='primary' classes={{root: 'app-header'}}>
            <div className='header-content-wrapper'>
                <div className='header-content'>
                    <img src={country} className='App-logo' alt='logo' />
                    <div className='title'>{props.application}</div>
                </div>
                <Button component={Link} to='/' classes={{root: 'home-icon'}}>
                    <Home color='secondary' fontSize='large' />
                </Button>
            </div>
        </AppBar>
    );
};
