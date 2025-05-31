import axios from "axios";

const BASE_URL = 'http://192.168.1.8:8000/';

export const endpoints = {
    'login': '/o/token/',
    'current-user': '/users/current-user/',
    'member-profile': '/member-profiles/',
    'register': '/users/'

};

export const authApis = (token) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
});