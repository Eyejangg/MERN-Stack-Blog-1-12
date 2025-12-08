import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/SDLC.png";
import image2 from "../assets/Mobile-testing-plan.jpg";
import image3 from "../assets/TechnicalSkill.png";

// ตัวอย่างข้อมูล Blog
const blogPosts = [
  {
    id: 1,
    title: "สร้างพื้นฐานความรู้ (Foundation)",
    description:
      "Software Development Life Cycle (SDLC) & Software Testing Life Cycle (STLC): เข้าใจกระบวนการพัฒนาและการทดสอบซอฟต์แวร์.",
    image: image1,
  },
  {
    id: 2,
    title: "ฝึกฝนทักษะทางเทคนิค (Technical Skills)",
    description:
      "Manual Testing: ฝึกทดสอบ Web/Mobile App, เขียน Test Case, และทำความเข้าใจ Bug Tracking (Jira, Bugzilla , Automation & API , รู้จัก SQL, Linux Commands, และ CI/CD เบื้องต้น. ).",
    image: image2,
  },
  {
    id: 3,
    title: "พัฒนาทักษะอื่นๆ และสร้างโปรไฟล์ (Soft Skills & Portfolio)",
    description:
      "Soft Skills: ฝึกการสื่อสาร, การวิเคราะห์, และการแก้ปัญหา , Portfolio: สร้างผลงานจากการฝึกทดสอบ Web/Mobile และ API โดยใช้เครื่องมือที่เรียนรู้ เพื่อนำเสนอเวลาสมัครงาน",
    image: image3,
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
        <h1 className="text-4xl font-bold mb-2">Software Tester</h1>
        <p className="text-lg opacity-80"> บทความเกี่ยวกับ Software Tester </p>

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
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    navigate(`/post/${post.id}`, { state: { post } })
                  }
                >
                  อ่านเพิ่มเติม
                </button>

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
