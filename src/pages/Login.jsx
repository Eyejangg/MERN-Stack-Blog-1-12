import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // hook สำหรับ redirect

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตัวอย่าง: ตรวจสอบ email/password แบบง่าย
    console.log({ email, password });

    // เรียก callback เปลี่ยนสถานะ login
    if (onLogin) {
      onLogin();
    }

    // redirect ไปหน้า Home
    navigate("/");

    // รีเซ็ตฟอร์ม
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-base-200 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">เข้าสู่ระบบ</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">อีเมล</span>
          </label>
          <input
            type="email"
            placeholder="ใส่อีเมล"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">รหัสผ่าน</span>
          </label>
          <input
            type="password"
            placeholder="ใส่รหัสผ่าน"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            เข้าสู่ระบบ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
