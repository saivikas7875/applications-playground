import './Header.scss';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';

export const Header = () => (
    <AppBar color="primary" classes={{ root: 'app-header' }}>
        <div>Countries</div>
    </AppBar>
);
