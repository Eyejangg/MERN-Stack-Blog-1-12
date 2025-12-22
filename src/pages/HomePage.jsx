import React, { useState, useEffect } from "react";
import CardBlog from "../components/CardBlog";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  const fetchAllPost = async () => {
    try {
      const response = await PostService.getAllPost();
      if(response.status === 200){
        setPosts(response.data);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  }; // ปิดฟังก์ชัน fetchAllPost ให้ถูกต้อง
  return (
    <div className="space-y-4">
      {posts.length === 0 && 
      posts.map((post, index) => (<Post key={index}  index={index}  {{...post}} />))}
      {posts.length === 0 && <h1 > No Post </h1>}
    </div>
  );
};

export default HomePage;
