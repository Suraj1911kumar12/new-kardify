import axios from 'axios';

// console.log('This is env', process.env.API_URL);

const axiosCall = axios.create({
  baseURL: 'https://backend.kardify.in/api',
  headers: {
    post: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    get: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  withCredentials: false,
});

export default axiosCall;
