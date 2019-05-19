import './country-card.scss';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

export const CountryCard = props => {
    return (
        <Card raised>
            <CardHeader
                classes={{root: 'card-header', content: 'card-header-content', title: 'white-text'}}
                title={props.title}
            />
            <CardContent classes={{root: 'card-content'}}>
                <Typography variant='body2'>{props.content}</Typography>
            </CardContent>
        </Card>
    );
};
