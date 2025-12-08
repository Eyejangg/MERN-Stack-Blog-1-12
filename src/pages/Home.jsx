import React from "react";
import { useNavigate } from "react-router-dom";

// ตัวอย่างข้อมูล Blog
const blogPosts = [
  {
    id: 1,
    title: "เริ่มต้นการเป็น Software Engineer",
    description:
      "คำแนะนำและแนวทางในการก้าวเข้าสู่วงการ Software Engineering ตั้งแต่พื้นฐานจนถึงการพัฒนาเต็มตัว",
    image:
      "https://images.unsplash.com/photo-1581091215360-7d9e6d8f4a14?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "ทำความเข้าใจระบบเวอร์ชันควบคุม (Git)",
    description:
      "Git คือเครื่องมือสำคัญที่นักพัฒนาใช้ในการจัดการและติดตามการเปลี่ยนแปลงของโค้ด...",
    image:
      "https://images.unsplash.com/photo-1581091215360-7d9e6d8f4a14?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "REST API คืออะไร?",
    description:
      "REST API เป็นหนึ่งในสถาปัตยกรรมยอดนิยมที่ใช้สื่อสารระหว่างระบบ...",
    image:
      "https://images.unsplash.com/photo-1581091215360-7d9e6d8f4a14?auto=format&fit=crop&w=800&q=80",
  },
];

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/create-post");
  };

  const handleEditPost = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">SE-Blog</h1>
        <p className="text-lg opacity-80">
          แหล่งรวมบทความเกี่ยวกับ Software Engineering, Coding และเทคโนโลยี
        </p>

        {/* ปุ่ม Create Post เฉพาะคน login */}
        {isLoggedIn && (
          <button onClick={handleCreatePost} className="btn btn-primary mt-4">
            สร้างโพสต์ใหม่
          </button>
        )}
      </section>

      {/* Blog List */}
      <section className="space-y-8">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`flex flex-col md:flex-row items-center bg-base-200 shadow-md rounded-lg overflow-hidden ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/2 h-64 object-cover"
            />

            {/* Text */}
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>

              {/* ปุ่มต่างๆ */}
              <div className="flex gap-2">
                <button className="btn btn-primary btn-sm">อ่านเพิ่มเติม</button>

                {/* ปุ่ม Edit เฉพาะคน login */}
                {isLoggedIn && (
                  <button
                    onClick={() => handleEditPost(post.id)}
                    className="btn btn-warning btn-sm"
                  >
                    แก้ไขโพสต์
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
