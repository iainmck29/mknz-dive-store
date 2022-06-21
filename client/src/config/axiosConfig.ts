import axios from 'axios';

const production = true;

const apiAxios = axios.create({
    baseURL: production ? 'https://mknz-dive-store.herokuapp.com/api' : 'http://localhost:9000/api',
    withCredentials: true
})

export default apiAxios