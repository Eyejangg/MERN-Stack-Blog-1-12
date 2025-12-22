import React, { useState, useEffect } from "react";
import CardBlog from "../components/CardBlog";

function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const mockBlogs = [
      {
        id: 1,
        title: "ชื่อโครงการคณ Intel และชื่อโอบไนโหนส่อพึง",
        author: "wurtha2",
        date: "05 December 2024 - 23:26",
        description: "หลี่กรรมการมีคณสมบัติสำสามารถทำให้...",
        image:
          "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
      },
      {
        id: 2,
        title: "KBTG วางแผนสตอวิ Agentic AI ปีนี 2025",
        author: "wurtha",
        date: "05 December 2024 - 21:11",
        description: "บริษัทธิ์บันทึก AI ชี้บลูปจบโจทนั้น...",
        image:
          "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
      },
    ];
    setTimeout(() => setBlogs(mockBlogs), 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-2xl md:max-w-4xl">
        <div className="flex flex-col gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <CardBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
