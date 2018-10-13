import axios from 'axios';
import { config } from '../../config';

class Api {
  constructor(baseUrl) {
    this._baseUrl = `${baseUrl}/api/v1`;
  }

  setToken(token) { // eslint-disable-line
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  mockCall() { // eslint-disable-line
    return new Promise(res => setTimeout(res, 1000));
  }
}

const api = new Api(config.apiUrl);

export default api;
