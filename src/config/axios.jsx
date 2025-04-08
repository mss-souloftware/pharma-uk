import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1545/api/v1', // Replace with actual backend URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
  