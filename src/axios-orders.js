import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-pj.firebaseio.com/'
});

export default instance;