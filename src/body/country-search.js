import './Countries.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';

export const CountrySearch = props => {
    return (
        <div className="search-container">
            <TextField
                id="outlined-full-width"
                classes={{
                    root: 'country-search'
                }}
                label="Label"
                style={{ margin: 8 }}
                placeholder="Search for a Country"
                fullWidth
                margin="none"
                variant="outlined"
                value={props.country}
                onChange={props.inputChange}
            />
            <Button
                color="secondary"
                classes={{
                    root: 'search-button'
                }}
                disabled={props.country === ''}
                onClick={props.onSearch}
                size="large"
                variant='contained'
            >
                Search
            </Button>
        </div>
    );
};
