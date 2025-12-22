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

const removeUser = () => {
  cookie.remove("user", { path: "/" }); // ลบ cookie ชื่อ user และ ระบุลบเป็น path /
};

const setUser = (user) => {
  cookie.set(
    "user",
    JSON.stringify({
      id: user.id,
      username: user.username,
      accessToken: user.accessToken,
    }),
    {
      path: "/",
      expires: new Date(Date.now() + 86400), // cookie จะหมดอายุใน 1 วัน (86400 วินาที) 24*60*60
    }
  );
};

const TokenService = {
  getAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
