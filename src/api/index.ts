import axios from 'axios';

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest

// use interseptores to catch API erros

const api = axios.create({
  baseURL: `https://pro-api.coinmarketcap.com/v1/${process.env.REACT_APP_CMC_API_TOKEN}`,
});

export default api;
