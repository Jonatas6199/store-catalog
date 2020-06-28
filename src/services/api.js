import axios from 'axios';

const api = axios.create({
    baseURL: 'BACKEND URL',
});

export default api;