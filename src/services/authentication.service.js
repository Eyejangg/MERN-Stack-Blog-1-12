import api from "./api";
import TokenService from "./token.service";
const API_URL = import.meta.env.VITE_AUTH_URL;
const register = async (username, password) => {
  return await api.post(API_URL + "/register", { username, password }); // ส่งข้อมูล username และ password ไปยัง endpoint /register โดยการเปิด { username , password }
};

const login = async (username, password) => {
  // const response = ได้รับค่ากลับมาจากการเรียกใช้ api.post
  const response = await api.post(API_URL + "/login", { username, password }); // เมื่อ login สำเร็จ จะได้ user ที่มี accessToken
  const { status, data } = response; // destructuring response ออกมาเป็น status กับ data ใน office      postman จะมี status กับ data ที่ axios
  if (status === 200) {
    if (data?.accessToken) {
      TokenService.setUser(data); // ถ้า login สำเร็จ จะเก็บ user ลง cookie
    }
  }
  // หน้าที่กลางทาง

  return response;
};

const logout = () => {
  // ถ้าจะเลือกว่าลบใครให้ใส่ user
  TokenService.removeUser(); // ลบ cookie user เมื่อ logout แบบ target เดียว
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
