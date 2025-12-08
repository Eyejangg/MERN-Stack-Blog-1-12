import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Create from "../pages/Create.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";
import EditPost from "../pages/EditPost.jsx";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      ),

      children: [
        {
          path: "/",
          element: <Home isLoggedIn={isLoggedIn} />,  // ⬅ แก้ตรงนี้!
        },
        {
          path: "/CreatePost",
          element: <Create isLoggedIn={isLoggedIn} />,
        },
        {
          path: "/Register",
          element: <Register />,
        },
        {
          path: "/Login",
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: "/profile",
          element: <Profile isLoggedIn={isLoggedIn} />,
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
