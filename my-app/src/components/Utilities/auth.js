import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

export const getToken = () => {
  // const token = localStorage.getItem('accessToken');
  const jwt = Cookies.get("jwt");

  if (jwt) {
    // const decodedJwt = jwtDecode(jwt);
    // const { exp } = decodedJwt;
    // const currentTime = Date.now() / 1000;

    // if (exp < currentTime) {
    //   return localStorage.removeItem('accessToken');

    // }

    if (isExpired(jwt) === true) {
      Cookies.remove("jwt");
      return null;
    }

    return jwt;
    // return JSON.parse(localStorage.getItem('accessToken'));
  }
  return jwt;
};

export const setToken = (jwt) => {
  if (jwt) {
    // localStorage.setItem('jwt', JSON.stringify(token));
    // Cookies.set('hi', "hello")s
    Cookies.set("jwt", jwt, {
      sameSite: "strict",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      path: "/",
    });
  }
  // else {
  //   localStorage.removeItem('accessToken');
  // }
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
  Cookies.remove("jwt");
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
// export const setToken = (token) => {
//     if (token) {
//       localStorage.setItem('accessToken', JSON.stringify(token));
//     } else {
//       localStorage.removeItem('accessToken');
//     }
//   };
