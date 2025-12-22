import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import TokenService from "../services/token.service";
export const UserContextProvider = ({ children }) => {
  // รับ prop children node ลูก
  const [userInfo, setUserInfo] = useState(getUser); // userInfo เก็บข้อมูลผู้ใช้ คือ state , setUserInfo ฟังก์ชันอัปเดตข้อมูลผู้ใช้
  const logIn = (user) => setUserInfo(user); // ฟังก์ชันล็อกอิน อัปเดตข้อมูลผู้ใช้

  const logOut = () => {
    setUserInfo(null);
  };

  function getUser() {
    const savedUser = TokenService.getUser() || null;
    return savedUser;
  }

  useEffect(() => {
    TokenService.setUser(userInfo); // ส่ง userInfo ที่เป็น null เข้าไป
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
