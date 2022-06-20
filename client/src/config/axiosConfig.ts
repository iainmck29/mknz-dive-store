import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'https://mknz-dive-store.herokuapp.com/api',
    withCredentials: true
})

export default apiAxios