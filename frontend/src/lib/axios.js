import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-backend-z623.onrender.com/api",
  withCredentials: true,
});