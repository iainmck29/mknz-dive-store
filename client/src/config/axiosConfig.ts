import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'http://localhost:9000/api',
    // withCredentials: true
})

export default apiAxios