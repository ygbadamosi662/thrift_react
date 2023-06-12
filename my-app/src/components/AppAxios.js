import axios from 'axios';

const apex = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

apex.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
// apex.defaults.hideSensitiveHeaders = false;

export const appAx = apex


export const setAuthJwt = jwt => {
  if (jwt) {
    appAx.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  } else {
    delete appAx.defaults.headers.common['Authorization'];
  }
};

// export default {appAxios, setAuthJwt};