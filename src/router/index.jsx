import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";
import EditPost from "../pages/EditPost.jsx";
import PostDetail from "../pages/PostDetail.jsx"; // เพิ่ม import

// ...existing code...

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return createBrowserRouter([
    {
      path: "/",
      element: <MainLayout isLoggedIn={isLoggedIn} onLogout={handleLogout} />,

      children: [
        {
          path: "/",
          element: <Home isLoggedIn={isLoggedIn} />,
        },
        {
          path: "/create-post", // เปลี่ยนเป็น lowercase ให้ตรงกับ navigate("/create-post")
          element: <Create isLoggedIn={isLoggedIn} />,
        },
        {
          path: "/register", // เปลี่ยนเป็น lowercase ให้ตรงกับ navigate("/register")
          element: <Register />,
        },
        {
          path: "/login", // เปลี่ยนเป็น lowercase ให้ตรงกับ navigate("/login")
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: "/profile",
          element: <Profile isLoggedIn={isLoggedIn} />,
        },
        {
          path: "/post/:id", // เพิ่ม Route สำหรับ PostDetail
          element: <PostDetail isLoggedIn={isLoggedIn} />,
        },
        {
          path: "/edit/:id",
          element: <EditPost isLoggedIn={isLoggedIn} />,
        },
      ],
    },
  ]);
};

export default Router;
