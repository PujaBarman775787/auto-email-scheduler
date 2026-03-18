import axios from "axios";

const api = axios.create({
  baseURL: "http://auto-email-scheduler-9zx6.onrender.com/api",
});

export default api;