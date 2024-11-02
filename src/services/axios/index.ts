import axios from 'axios';
import {APIURL} from 'utils/Constants';

const AxiosInstance = axios.create({
  baseURL: APIURL,
  timeout: 1000 * 30,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTk2NjE4ODUyOTcxYjgyMWNiOTk1ZjgyZGFkMmZlNCIsIm5iZiI6MTczMDQ1MDI0OS45MzY1MjM0LCJzdWIiOiI2NzIyMDc3YWQ5YThhNzdiNWRhNDQ5MDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oBcWCkLdwJ_l8hjXk1dqdAP_NQq4kzVlrefLd4zvUc8`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

AxiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

export default AxiosInstance;
