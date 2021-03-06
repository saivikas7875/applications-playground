import './countries.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';

const stringRegex = /^([a-zA-Z]*\s*)*$/;

export const CountrySearch = props => {
    const onKeyPress = showError => event => {
        if (event.charCode === 13 && !showError) {
            event.preventDefault();
            props.onSearch(props.country);
        }
    };

    const showError = props.country !== '' && !stringRegex.test(props.country);

    const label = showError ? 'In valid input' : 'Country';

    return (
        <div className='search-container'>
            <TextField
                id='outlined-full-width'
                classes={{
                    root: 'country-search'
                }}
                label={label}
                style={{margin: 8}}
                placeholder='Search for a Country by its name'
                fullWidth
                error={showError}
                margin='none'
                variant='filled'
                type='search'
                value={props.country}
                onChange={props.inputChange}
                onKeyPress={onKeyPress(showError)}
            />
            <Button
                color='secondary'
                classes={{
                    root: 'search-button'
                }}
                disabled={props.country === '' || showError}
                onClick={props.onSearch}
                size='large'
                variant='contained'
            >
                Search
            </Button>
        </div>
    );
};
