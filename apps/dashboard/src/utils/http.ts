import axios from "axios";
import AUTH from "../configs/auth";

const http = axios.create({
  baseURL: "http://localhost:8000",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH.key);

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default http;
