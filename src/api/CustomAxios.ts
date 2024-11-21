import axios from "axios";

const CustomAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

CustomAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    console.log("저장된 토큰:", token);

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
