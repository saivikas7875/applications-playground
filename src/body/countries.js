import './Countries.scss';
import React, { useState, useEffect } from 'react';
import { CountrySearch } from './country-search';
import { fetchCountry } from '../services/countries';
import { CountriesSelector } from './countries-selector';

const getCountryUrl = country => `https://restcountries.eu/rest/v2/name/${country}`;

export const Countries = () => {
    const [countryInput, setCountryInput] = useState('');
    const [countryUrl, setCountryUrl] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountry = async () => {
            const list = await fetchCountry(countryUrl);
            setCountries(list);
        };

        getCountry();
    }, [countryUrl]);

    return (
        <div className="countries-container">
            <CountrySearch
                country={countryInput}
                inputChange={event => setCountryInput(event.target.value)}
                onSearch={() => setCountryUrl(getCountryUrl(countryInput))}
            />
            <CountriesSelector countries={countries}/>
        </div>
    );
};
