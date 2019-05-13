import React from 'react';

export const CountriesSelector = props => {
    return (
        <ul>
            {Array.isArray(props.countries) && props.countries.map(country => {
                return <li key={country.name}>{country.name}</li>;
            })}
        </ul>
    );
};
