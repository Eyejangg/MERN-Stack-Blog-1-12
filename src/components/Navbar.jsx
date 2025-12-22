import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const username = userInfo?.username; // ตรวจสอบชื่อผู้ใช้จาก context
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserInfo({}); //
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          SE NPRU Blog
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {username ? (
            <>
              <Link to="/create-post">Create a new Post</Link>
              <li>
                <button className="btn btn-ghost" onClick={handleLogout}>
                  Logout ({username})
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
