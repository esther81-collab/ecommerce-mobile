import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const client = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

export default client;