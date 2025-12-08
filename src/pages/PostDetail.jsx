import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import image1 from "../assets/SDLC.png";
import image2 from "../assets/Mobile-testing-plan.jpg";
import image3 from "../assets/TechnicalSkill.png";

const posts = [
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

const PostDetail = ({ isLoggedIn }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ถ้ามี post ถูกส่งมาจาก navigate state ให้ใช้ตัวนั้น (เร็วกว่า)
  const postFromState = location.state?.post;
  const postId = Number(id);
  const post = postFromState || posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="px-6 py-10 max-w-4xl mx-auto">
        <p className="text-center text-lg">ไม่พบโพสต์</p>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate(-1)}
          >
            กลับ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto space-y-6">
      <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)}>
        ← กลับ
      </button>

      <div className="bg-base-200 shadow-md rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.description}</p>

          <div className="flex gap-2">
            {isLoggedIn && (
              <button
                className="btn btn-warning btn-sm"
                onClick={() => navigate(`/edit/${post.id}`)}
              >
                แก้ไขโพสต์
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
