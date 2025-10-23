import axios from "axios";

// Use relative URL: proxy in vite.config.js forwards to backend
const API = axios.create({
  baseURL: "/api/users",
});

export default API;
