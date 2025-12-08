import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    alert("สมัครสมาชิกเรียบร้อยแล้ว!");
  };

  return (
    // Wrapper: จัดกึ่งกลางหน้าจอ และใส่พื้นหลังสีเทาอ่อน
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">สร้างบัญชีใหม่</h1>
          <p className="text-slate-500 mt-2 text-sm">
            สมัครสมาชิกเพื่อเริ่มใช้งาน Software Tester Tools
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="label pt-0">
              <span className="label-text font-medium text-slate-700">
                ชื่อผู้ใช้
              </span>
            </label>
            <input
              type="text"
              placeholder="Ex. tester01"
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-slate-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
            <label className="label pt-0">
              <span className="label-text font-medium text-slate-700">
                รหัสผ่าน
              </span>
            </label>
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
              สมัครสมาชิก
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-500 mt-6">
          มีบัญชีอยู่แล้ว?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
