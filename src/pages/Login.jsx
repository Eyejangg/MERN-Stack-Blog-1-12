import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (onLogin) {
      onLogin();
    }
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    // Wrapper: ใช้สไตล์เดียวกับ Register เพื่อความต่อเนื่อง
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            ยินดีต้อนรับกลับ
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="label pt-0">
              <span className="label-text font-medium text-slate-700">
                อีเมล
              </span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-slate-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="label pt-0 p-0">
                <span className="label-text font-medium text-slate-700">
                  รหัสผ่าน
                </span>
              </label>
              <a href="#" className="text-xs text-indigo-600 hover:underline">
                ลืมรหัสผ่าน?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-slate-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-lg text-lg shadow-md hover:shadow-lg transition-all"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-500 mt-6">
          ยังไม่มีบัญชี?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            สมัครสมาชิก
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
