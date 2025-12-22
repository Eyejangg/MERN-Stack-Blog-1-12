import { Cookies } from "react-cookie";
const cookie = new Cookies();

const getAccessToken = () => {
  const user = getUser(); // get user มาจาก cookie
  return user?.accessToken; // ถ้า user มีค่า ให้ return accessToken ถ้าไม่มีให้ return undefined
};

const getUser = () => {
  // user มาจาก cookie ที่ login แล้ว ใน postman จะมี user
  const user = cookie.get("user");
  return user;
};

// ลบ cookie ชื่อ user และ ระบุลบเป็น path
const removeUser = () => {
  cookie.remove("user", { path: "/" });
};

const setUser = (user) => {
  // ตรวจสอบว่า user ต้องมีข้อมูล และมี accessToken จริงๆ ถึงจะทำการ set
  if (user && user.accessToken) {
    cookie.set(
      "user",
      JSON.stringify({
        id: user?.id,
        username: user?.username,
        accessToken: user.accessToken,
      }),
      {
        path: "/",
        expires: new Date(Date.now() + 86400),
      }
    );
  } else {
    removeUser();
    // หากไม่มี user หรือไม่มี accessToken ให้ลบ cookie ทิ้ง
  }
};

const TokenService = {
  getAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
