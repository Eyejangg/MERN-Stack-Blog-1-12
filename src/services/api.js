import axios from "axios";
import TokenService from "./token.service";

const baseURL = import.meta.env.VITE_BASEURL || "http://localhost:5000/api/v1";

const instance = axios.create({
  baseURL,
});

// ทุก request จะมี header Authorization ที่มีค่าเป็น Bearer accessToken
// interceptors คือ ตัวกลางที่คอยดักจับ request หรือ response ก่อนที่จะส่งไปยังปลายทาง
instance.interceptors.request.use((config) => {
  const token = TokenService.getAccessToken();
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

// อันนี้คือ middleware ที่คอยดักจับ response ก่อนที่จะส่งไปยังปลายทาง

export default instance;
