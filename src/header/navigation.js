import React from 'react';
import {Link} from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

export const Navigation = () => {
    return (
        <MenuList className='app-navigation'>
            <MenuItem classes={{root: 'home-menu-item'}}>
                <Button component={Link} to='/' classes={{root: 'home-icon'}}>
                    <Home color='secondary' fontSize='large' />
                </Button>
            </MenuItem>
        </MenuList>
    );
};
