import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { fetchAirportInfo } from '../services/fetch-airport-info';

export const Header = () => {
    const [airports, storeAirports] = useState([]);

    useEffect(() => {
        const fetchAirports = async () => {
            const airports = await fetchAirportInfo();

            storeAirports(airports);
        };

        fetchAirports();
    }, []);

    console.log(airports);

    return (
        <AppBar color="primary">
            <div>'Direct Flights'</div>
        </AppBar>
    );
};
