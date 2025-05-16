import axios from "axios";
import { url, getLocalStorageItem, notifyError } from "./Helper";

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getLocalStorageItem("token")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response?.data?.meta?.code === 401) {
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      window.location.reload();
    }
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("userData");
      window.location.href = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
