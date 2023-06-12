import jwtDecode from "jwt-decode";

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

export const getToken = () => {
  const jwt = localStorage.getItem('jwt');
  
  if (jwt) {

    if (isExpired(jwt) === true) {
      localStorage.removeItem('jwt');
      return null;
    }

    return JSON.parse(jwt);
    
  }
  return jwt;
};

export const setToken = (jwt) => {
  if (jwt) {
    localStorage.setItem('jwt', JSON.stringify(jwt));
  }
  else {
    localStorage.removeItem('jwt');
  }
};

// export const setRefreshToken = (token) => {
//   if (token) {
//     localStorage.setItem('refreshToken', JSON.stringify(token));
//   } else {
//     localStorage.removeItem('refreshToken');
//   }
// };

export const isExpired = (jwt) => {
  try {
    const decoded = decodeToken(jwt);
    const milliseconds = decoded.exp * 1000;
    return Date.now() > milliseconds;
  } catch (err) {
    return true;
  }
};

// const clearStorage = () => {
//   localStorage.clear();
// };

export const decodeToken = (jwt) => {
  let decoded = {};
  try {
    decoded = jwtDecode(jwt);
  } catch (error) {
    return null;
  }
  return decoded;
};

// export const login = (jwt) => {
//   setToken(jwt);
// };

export const logout = () => {
  localStorage.removeItem('jwt')
};

// export const checkAuth = (store) => {
//   if (localStorage.accessToken) {
//     setAuthToken(localStorage.accessToken);
//     const decoded = jwtDecode(localStorage.accessToken);
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp < currentTime) {
//       store.dispatch(logout());
//       window.location.href = '/signin';
//     }
//   }
// };
