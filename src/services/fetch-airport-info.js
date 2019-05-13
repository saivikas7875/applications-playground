import { AirportsApi } from '../airports-api/api-key';
import axios from 'axios';

export const fetchAirportInfo = async () => {
    const endPoint = `https://iatacodes.org/api/v6/airports?api_key=${
        AirportsApi.API_KEY
    }`;

    const response = await axios.get(endPoint, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    return response.json();
};
