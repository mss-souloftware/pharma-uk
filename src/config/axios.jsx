import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xrwtph4c-1545.inc1.devtunnels.ms/api/v1', // Replace with actual backend URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
