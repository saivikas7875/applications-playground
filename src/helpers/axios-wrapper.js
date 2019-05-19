import axios from 'axios';

export const getData = async endPoint => {
    const response = await axios.get(endPoint);

    return response.data;
};
