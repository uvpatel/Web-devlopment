import axios from "axios";

const API = axios.create({
  baseURL: "/api/users", // proxy will forward to deployed backend
});

export default API;
