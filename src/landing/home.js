import './home.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {HomeHeader} from '../header/home-header';

export const Home = () => {
    return (
        <section className='home-container'>
            <HomeHeader />
            <main className='applications'>
                <Card classes={{root: 'home-card'}}>
                    <CardContent classes={{root: 'home-card-content'}}>
                        <Button
                            component={Link}
                            to='/countries'
                            variant='text'
                            size='small'
                            classes={{root: 'link-root', label: 'link-label'}}
                        >
                            Countries
                        </Button>
                        <Typography variant='body1' classes={{root: 'home-card-info'}}>
                            View country information like population, size, time zones and languages
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        </section>
    );
};
