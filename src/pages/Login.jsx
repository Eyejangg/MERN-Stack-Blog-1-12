import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Username or Password cannot be empty",
        icon: "error",
      });
      return;
    }

    try {
      const response = await AuthService.login(user.username, user.password);

      if (response?.status === 200) {
        Swal.fire({
          title: "Success",
          text: response.data?.message || "Login successful",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
        setUser({ username: "", password: "" });
      } else {
        Swal.fire({
          title: "Error",
          text: response?.data?.message || "Login failed",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || error.message || "Login failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="*****"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
