import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import images ... (ตามเดิม)
import image1 from "../assets/SDLC.png";
import image2 from "../assets/Mobile-testing-plan.jpg";
import image3 from "../assets/TechnicalSkill.png";

const posts = [
  {
    id: 1,
    title: "สร้างพื้นฐานความรู้ (Foundation)",
    description: "Software Development Life Cycle (SDLC)...",
    image: image1,
    createdAt: "2023-10-01T10:00:00Z", // จำลองวันที่แบบ MongoDB
  },
  {
    id: 2,
    title: "ฝึกฝนทักษะทางเทคนิค (Technical Skills)",
    description: "Manual Testing: ฝึกทดสอบ Web/Mobile App...",
    image: image2,
    createdAt: "2023-10-15T14:30:00Z",
  },
  {
    id: 3,
    title: "พัฒนาทักษะอื่นๆ และสร้างโปรไฟล์",
    description: "Soft Skills: ฝึกการสื่อสาร...",
    image: image3,
    createdAt: "2023-11-05T09:15:00Z",
  },
];

const PostDetail = ({ isLoggedIn }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const postFromState = location.state?.post;
  const postId = Number(id);
  const post = postFromState || posts.find((p) => p.id === postId);

  // ฟังก์ชันแปลงวันที่ให้เป็นภาษาไทยสวยๆ
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!post) {
    return (
      <div className="px-6 py-10 max-w-4xl mx-auto text-center">
        <p className="text-lg">ไม่พบโพสต์</p>
        <button
          className="btn btn-primary btn-sm mt-4"
          onClick={() => navigate(-1)}
        >
          กลับ
        </button>
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
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

          {/* ส่วนแสดงวันที่ */}
          <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>โพสต์เมื่อ: {formatDate(post.createdAt)}</span>
          </div>

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
