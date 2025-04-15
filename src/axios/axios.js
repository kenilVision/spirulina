import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_STRIPE_BEurl,
  headers: {
    'Content-Type': 'application/json',
  }
});


axiosInstance.interceptors.request.use(    /// this will always pass token with req
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(   // this will always check if unauthorize send you to login page
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       if (error.response.data.flag === 1000) {
//         console.error('Unauthorized, redirecting to login...');
//         window.location.href = '/login'; 
//       }
//     }
//     return Promise.reject(error);
//   }
// );
export default axiosInstance;
