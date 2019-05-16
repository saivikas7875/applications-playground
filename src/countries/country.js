import './country-card.scss';
import React from 'react';
import {CountryCard} from './country-card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export const Country = props => {
    return (
        <section className='country-details'>
            <Typography variant='h5' align='center' color='secondary' gutterBottom>
                Country Details for {props.country.name}
            </Typography>
            <div className='details-grid'>
                <CountryCard title='Capital City' content={props.country.capital} />
                <CountryCard title='Region' content={props.country.region} />
                <CountryCard title='Area (in sq meters)' content={props.country.area} />
                <CountryCard title='Demonym' content={props.country.demonym} />
                <CountryCard title='Population' content={props.country.population} />
                <Card raised>
                    <CardHeader classes={{root: 'card-header', content: 'card-header-content'}} title='Time zones' />
                    <CardContent classes={{root: 'card-content'}}>
                        <List dense>
                            {props.country.timezones.map(timezone => (
                                <ListItem divider={props.country.timezones.length > 1} key={timezone}>
                                    <Typography variant='body2'> {timezone} </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
                <Card raised>
                    <CardHeader classes={{root: 'card-header', content: 'card-header-content'}} title='Languages' />
                    <CardContent classes={{root: 'card-content'}}>
                        <List dense>
                            {props.country.languages.map(language => (
                                <ListItem divider={props.country.languages.length > 1} key={language.name}>
                                    <Typography variant='body2'> {language.name} </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </div>
            <Link
                className='read-more-link'
                align='left'
                color='secondary'
                underline='hover'
                target='_blank'
                variant='body2'
                href={`https://en.wikipedia.org/wiki/${props.country.name}`}
            >
                Read more about {props.country.name}
            </Link>
        </section>
    );
};
