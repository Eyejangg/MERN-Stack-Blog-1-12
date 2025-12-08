import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // สำหรับตอนนี้แค่ log ข้อมูลออก console
    console.log({ username, email, password });

    // รีเซ็ตฟอร์ม
    setUsername("");
    setEmail("");
    setPassword("");

    alert("สมัครสมาชิกเรียบร้อยแล้ว!");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-base-200 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">สมัครสมาชิก</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">ชื่อผู้ใช้</span>
          </label>
          <input
            type="text"
            placeholder="ใส่ชื่อผู้ใช้"
            className="input input-bordered w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

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
            สมัครสมาชิก
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
