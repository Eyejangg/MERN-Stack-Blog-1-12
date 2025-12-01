import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// ==============================
// 1. ส่วน COMPONENTS (Navbar)
// ==============================
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg mb-8 px-4 sm:px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-primary">
          MERN Blog
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          {/* ลิ้งค์เปลี่ยนหน้า */}
          <li>
            <Link to="/create" className="btn btn-sm btn-outline btn-primary">
              เขียนบทความ
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn btn-sm btn-ghost">
              เข้าสู่ระบบ
            </Link>
          </li>
          <li>
            <Link to="/register" className="btn btn-sm btn-primary text-white">
              สมัครสมาชิก
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// ==============================
// 2. ส่วน PAGES (หน้าต่างๆ)
// ==============================

// --- หน้า Home Page ---
const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card ตัวอย่างที่ 1 */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <figure>
          <img src="https://placehold.co/600x400" alt="Blog" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">สอนเขียน React เบื้องต้น</h2>
          <p className="text-gray-500 text-sm">
            ผู้เขียน: Admin | วันที่: 10 Oct 2023
          </p>
          <p>
            เนื้อหาเกริ่นนำบทความ... การเขียน React นั้นไม่ยากอย่างที่คิด
            เริ่มต้นด้วย Components...
          </p>
          <div className="card-actions justify-end">
            <Link to="/post" className="btn btn-primary btn-sm">
              อ่านต่อ
            </Link>
          </div>
        </div>
      </div>

      {/* Card ตัวอย่างที่ 2 */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <figure>
          <img src="https://placehold.co/600x400/orange/white" alt="Blog" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">เที่ยวญี่ปุ่นด้วยตัวเอง</h2>
          <p className="text-gray-500 text-sm">
            ผู้เขียน: User1 | วันที่: 12 Oct 2023
          </p>
          <p>รีวิวการเดินทางไปโตเกียวแบบไม่ง้อทัวร์ ประหยัดงบ และสนุก...</p>
          <div className="card-actions justify-end">
            <Link to="/post" className="btn btn-primary btn-sm">
              อ่านต่อ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- หน้า Post Detail (อ่านบทความ) ---
const PostDetail = () => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 p-6 lg:p-10">
      <h1 className="text-4xl font-bold mb-4">สอนเขียน React เบื้องต้น</h1>
      <div className="flex justify-between items-center text-gray-500 mb-6 border-b pb-4">
        <span>โดย Admin</span>
        <span>10 Oct 2023</span>
      </div>
      <img
        src="https://placehold.co/800x400"
        alt="Cover"
        className="w-full rounded-xl mb-6 object-cover"
      />
      <div className="prose max-w-none">
        <p>นี่คือเนื้อหาจำลอง (Content) ของบทความครับ...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <p>สามารถตกแต่งเนื้อหาตรงนี้ให้สวยงามได้ตามใจชอบ</p>
      </div>

      {/* ปุ่มสำหรับเจ้าของโพสต์ (Mockup) */}
      <div className="flex gap-2 mt-8 pt-4 border-t">
        <Link to="/edit" className="btn btn-warning btn-sm">
          แก้ไขบทความ
        </Link>
        <button className="btn btn-error btn-sm text-white">ลบ</button>
      </div>
    </div>
  );
};

// --- หน้า Create Post / Edit Post (ใช้ฟอร์มคล้ายกัน) ---
const CreatePost = ({ isEdit }) => {
  return (
    <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl border border-base-200 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        {isEdit ? "แก้ไขบทความ" : "เขียนบทความใหม่"}
      </h2>
      <form className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">หัวข้อบทความ</span>
          </label>
          <input
            type="text"
            placeholder="ใส่ชื่อเรื่อง..."
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">หมวดหมู่</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>
              เลือกหมวดหมู่
            </option>
            <option>Technology</option>
            <option>Life Style</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">รูปภาพปก (URL)</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">เนื้อหา</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="เขียนเนื้อหาตรงนี้..."
          ></textarea>
        </div>

        <div className="mt-6">
          <button className="btn btn-primary w-full text-lg">
            {isEdit ? "อัพเดทบทความ" : "ลงบทความ"}
          </button>
        </div>
      </form>
    </div>
  );
};

// --- หน้า Login ---
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="card w-96 bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">เข้าสู่ระบบ</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">อีเมล</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">รหัสผ่าน</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <Link to="/register" className="link link-hover text-sm">
              ยังไม่มีบัญชี? สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- หน้า Register ---
const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="card w-96 bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">สมัครสมาชิก</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ชื่อผู้ใช้</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">อีเมล</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">รหัสผ่าน</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <Link to="/login" className="link link-hover text-sm">
              มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==============================
// 3. MAIN APP ROUTER
// ==============================
function App() {
  return (
    <BrowserRouter>
      {/* 1. Navbar อยู่บนสุดทุกหน้า */}
      <Navbar />

      {/* 2. Container สำหรับเนื้อหา */}
      <div className="container mx-auto px-4 pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost isEdit={false} />} />
          <Route path="/edit" element={<CreatePost isEdit={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
