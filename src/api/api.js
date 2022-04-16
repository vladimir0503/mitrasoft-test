import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com';

export const getImages = async () => {
    return await axios.get(`${url}/photos?_start=0&_limit=24`);
};

export const getImageInfo = async id => {
    return await axios.get(`${url}/photos/${id}`);
};