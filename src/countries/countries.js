import './countries.scss';
import React, {useState, useEffect} from 'react';
import {CountrySearch} from './country-search';
import {fetchCountry} from '../helpers/countries';
import {CountriesSelector} from './countries-selector';
import {Country} from './country';
import {Header} from '../header/header';

const getCountryUrl = country => `https://restcountries.eu/rest/v2/name/${country}`;

export const Countries = () => {
    const [countryInput, setCountryInput] = useState('');
    const [countryUrl, setCountryUrl] = useState('');
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});

    useEffect(() => {
        const getCountry = async () => {
            const list = await fetchCountry(countryUrl);

            if (list.length > 1) {
                setCountries(list);
            } else if (list.length === 1) {
                setCountry(list[0]);
            }
        };

        if (countryUrl !== '') {
            getCountry();
        }
    }, [countryUrl]);

    return (
        <>
            <Header application='Country Search' />
            <div className='application-wrapper countries-container'>
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
                {typeof country.name !== 'undefined' && <Country country={country} />}
            </div>
        </>
    );
};
