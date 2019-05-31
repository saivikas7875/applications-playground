import './home.scss';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {HomeHeader} from '../header/home-header';

export const Home = () => {
    return (
        <section className='home-container'>
            <HomeHeader />
            <main className='applications'>
                <Card classes={{root: 'home-card'}}>
                    <CardContent classes={{root: 'home-card-content'}}>
                        <Button
                            component={RouterLink}
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
                <Card classes={{root: 'home-card'}}>
                    <CardContent classes={{root: 'home-card-content'}}>
                        <Button
                            component={RouterLink}
                            to='/capital-quiz'
                            variant='text'
                            size='small'
                            classes={{root: 'link-root', label: 'link-label'}}
                        >
                            Quiz: Guess the Capital city
                        </Button>
                        <Typography variant='body1' classes={{root: 'home-card-info'}}>
                            Test your knowledge about the world's capital cities
                        </Typography>
                    </CardContent>
                </Card>
                <Card classes={{root: 'home-card'}}>
                    <CardContent classes={{root: 'home-card-content'}}>
                        <Link
                            href='https://dog-breeds.saivikas2804.now.sh/'
                            classes={{root: 'link-root link-label third-party-link'}}
                            target='_blank'
                            underline='none'
                            rel='noopener noreferrer'
                        >
                            Dog breeds
                        </Link>
                        <Typography variant='body1' classes={{root: 'home-card-info'}}>
                            Get random images of dogs based on their breeds. Familiarize yourself with different breeds.
                        </Typography>
                    </CardContent>
                </Card>
            </main>
        </section>
    );
};
