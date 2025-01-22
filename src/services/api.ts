import axios from "axios";

axios.defaults.withCredentials = true

export const api = axios.create({baseURL: import.meta.env.VITE_API_URL})