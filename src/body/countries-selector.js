import React from 'react';

export const CountriesSelector = props => {
    const shouldRenderList = Array.isArray(props.countries) && props.countries.length > 1;

    return (
        shouldRenderList && 
        <div className='countries-selector'>
            <span>`There are multiple countries with the keyword <strong>{props.countryInput}</strong>. Select one to view more information`</span>
            <ul>
                {props.countries.map(country => {
                    return <li key={country.name} onClick={() => props.selectCountry(country)}>{country.name}</li>;
                })}
            </ul>
        </div>
    );
};
