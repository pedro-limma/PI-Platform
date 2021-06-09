import axios from 'axios';

const api = axios.create({
  //baseURL: process.env.REACT_APP_API_URL
  baseURL:"http://localhost:3333/v1"
});

export default api;
