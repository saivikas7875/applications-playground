import './countries.scss';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';

export const CountriesSelector = props => {
    const shouldRenderList = Array.isArray(props.countries) && props.countries.length > 1;

    return (
        shouldRenderList && (
            <div className='countries-selector'>
                <Typography>
                    Multiple countries with <strong>{props.countryInput}</strong> found. Pick one.
                </Typography>
                <List dense>
                    {props.countries.map(country => {
                        return (
                            <ListItem
                                divider
                                onClick={() => props.selectCountry(country)}
                                key={country.name}
                                classes={{root: 'country-list-item'}}
                            >
                                <ListItemText
                                    primary={country.name}
                                    secondary={`${country.subregion}, ${country.region}`}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        )
    );
};
