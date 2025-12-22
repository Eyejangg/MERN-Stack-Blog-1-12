import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Mock data - replace with API call
    const mockBlogs = {
      1: {
        id: 1,
        title: "ชื่อโครงการคณ Intel และชื่อโอบไนโหนส่อพึง",
        date: "05 December 2024 23:26",
        author: "wurtha2",
        content: "หลี่กรรมการมีคณสมบัติสำสามารถทำให้...",
        image:
          "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
        fullContent:
          "หลี่กรรมการมีคณสมบัติสำสามารถทำให้การบริหารและการจัดการได้อย่างเป็นระบบ และเสร็จสิ้นมีนการไลได้นลหารับการรรมื หลีกการถือศลวหมดช่วงก่อนจำเป็นต้องอดดใหล่นีติใจขาดคณร่าง\n\nภาคส่วนของการบริหารจะมีความสำคัญมากในการพัฒนาองค์กร และการสร้างคุณค่าให้กับลูกค้า",
      },
      2: {
        id: 2,
        title: "KBTG วางแผนสตอวิ Agentic AI ปีนี 2025",
        date: "05 December 2024 21:11",
        author: "wurtha",
        content: "บริษัทธิ์บันทึก AI ชี้บลูปจบโจทนั้น...",
        image:
          "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
        fullContent:
          "บริษัทธิ์บันทึก AI ชี้บลูปจบโจทนั้นขึ้นเลือนคอยส่องคาราจริงการบริหาร และเสร็จสิ้นมีนการไลได้นลหารับการรรมื หลีกการถือศลวหมดช่วงก่อนจำเป็นต้องอดดใหล่นีติใจขาดคณร่าง KBTG The Year of Agentic AI 2025 คำขายสำหลัก KBTG\n\nภาคส่วนของ KBTG The Year of Agentic AI 2025 คำขายสำหลัก KBTG คาอเลขแนนเฉพลการที่ AI เป็นสิ่งหมั่นในการบริหารการ บริการและการตัดสินของที่ เฝ้องสมสารสัทน้อยในปี 2025",
      },
    };
    setBlog(mockBlogs[id] || mockBlogs[1]);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-white p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
              <span>{blog.date}</span>
              <span>
                By{" "}
                <span className="text-blue-500 font-semibold">
                  {blog.author}
                </span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="w-full h-80">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="p-8">
            {blog.fullContent.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-base leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
