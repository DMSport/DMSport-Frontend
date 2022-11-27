import axios, { AxiosError } from "axios";
import { refresh, refreshErrorHandle } from "../api/refresh";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 100000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(refresh, refreshErrorHandle);

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
export default instance;
