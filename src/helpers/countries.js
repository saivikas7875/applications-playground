import {getData} from './axios-wrapper';

export const fetchAllCountries = async () => {
    const endPoint = await `https://restcountries.eu/rest/v2/all`;

    try {
        return getData(endPoint);
    } catch (error) {
        throw error;
    }
};

export const fetchCountry = countryUrl => {
    try {
        return getData(countryUrl);
    } catch (error) {
        throw error;
    }
};
