import axios from 'axios';
import authHeader from './auth-header';

const API_URL = meta.env.API_GATEWAY;

class CalculatorService {
  getPiHistory() {
    return axios.get(API_URL + 'calculator/pi-history');
  }

  getCurrentPi() {
    return axios.get(API_URL + 'calculator/pi-calculator', { headers: authHeader() })
  }

  getNewPi() {
    return axios.get(API_URL + 'calculator/calculate-pi', { headers: authHeader() })
  }

  getSunCircumference() {
    return axios.get(API_URL + 'calculator/sun-circumference', { headers: authHeader() })
  }
}

export default new CalculatorService();
