import axios from "axios";
// import { userAdminLocalStorage, userLocalStorage } from "./localService";
// import { store } from "../main";
// import { setLoadingOff, setLoadingOn } from "../redux/spinnerSlice";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";

// const token = userLocalStorage.get()?.token;

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: `Bearer ${token}`,
    tokenCybersoft: TOKEN_CYBERSOFT,
    "Content-Type": "application/json",
  },
});

// https.interceptors.request.use(
//   (config) => {
//     store.dispatch(setLoadingOn());
//     return config;
//   },
//   (err) => {
//     store.dispatch(setLoadingOff());
//     return Promise.reject(err);
//   }
// );

// https.interceptors.response.use(
//   (res) => {
//     store.dispatch(setLoadingOff());
//     return res;
//   },
//   (err) => {
//     store.dispatch(setLoadingOff());
//     return Promise.reject(err);
//   }
// );

// // DUNG CHO ADMIN PAGE
// const tokenAdmin = userAdminLocalStorage.get()?.token;
// export const httpsAdmin = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     token: `${tokenAdmin}`,
//     tokenCybersoft: TOKEN_CYBER,
//   },
// });

// httpsAdmin.interceptors.request.use(
//   (config) => {
//     store.dispatch(setLoadingOn());
//     return config;
//   },
//   (err) => {
//     store.dispatch(setLoadingOff());
//     return Promise.reject(err);
//   }
// );

// httpsAdmin.interceptors.response.use(
//   (res) => {
//     store.dispatch(setLoadingOff());
//     return res;
//   },
//   (err) => {
//     store.dispatch(setLoadingOff());
//     return Promise.reject(err);
//   }
// );
