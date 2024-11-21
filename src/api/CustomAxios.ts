import axios from "axios";
import { useAuthStore } from "../store/auth/authStore";

const CustomAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

CustomAxios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default CustomAxios;
