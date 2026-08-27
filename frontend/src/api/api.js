import axios from "axios";

const API = axios.create({
  baseURL: "https://jaipuri-collection.vercel.app/api",
});

export default API;