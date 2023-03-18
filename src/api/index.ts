import axios from 'axios';

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest

const api = axios.create({
  baseURL: `https://pro-api.coinmarketcap.com/v1/${process.env.REACT_APP_CMC_API_TOKEN}`,
});

export default api;
