import { getData } from './axios-wrapper';

export const fetchAllCountries = async () => {
    const endPoint = `https://restcountries.eu/rest/v2/all`;

    return getData(endPoint);
};

export const fetchCountry = countryUrl => {
    try {
        return getData(countryUrl);
    } catch (error) {
        return error;
    }
}
