// src/api.js
import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? '/api' // proxy in local dev
  : import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
// src/api.js
const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add response interceptor to handle errors consistently
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/admin-login'; // or your login route
    }
    return Promise.reject(error);
  }
);
