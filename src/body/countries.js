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
    const [country, setCountry] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const getCountry = async () => {
            const list = await fetchCountry(countryUrl);

            if (list.length > 1) {
                setCountries(list);
            } else if (list.length === 1) {
                setCountry(list[0]);
            } else if (list.length === 0) {
                setError(`No Countries found for with the name ${countryInput}`);
            }
        };

        getCountry();
    }, [countryUrl]);

    return (
        <div className="countries-container">
            <CountrySearch
                country={countryInput}
                inputChange={event => {
                    setCountryInput(event.target.value);
                    setCountry({});
                    setCountries([]);
                }}
                onSearch={() => setCountryUrl(getCountryUrl(countryInput))}
            />
            <CountriesSelector 
                countryInput={countryInput}
                countries={countries}
                selectCountry={country => setCountry(country)}
             />
            {country.name !== '' && country.name}
            {error !== '' && error}
        </div>
    );
};
