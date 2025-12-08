import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams(); // ใช้ดึง post id จาก URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // ตัวอย่าง fetch data (คุณปรับตาม API ของคุณ)
  useEffect(() => {
    // mock data
    const mock = {
      title: "How to play football",
      content: "This is the content...",
      imageUrl: "https://picsum.photos/600/300",
    };

    setTitle(mock.title);
    setContent(mock.content);
    setImageUrl(mock.imageUrl);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id,
      title,
      content,
      imageUrl,
      updatedAt: new Date(),
    };

    console.log("Updated Post:", updatedPost);

    // redirect ไปหน้า post list หรือหน้า detail
    navigate(`/blog/${id}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">✏️ Edit Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Post Title</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Enter post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* IMAGE URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Cover Image URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {/* IMAGE PREVIEW */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="rounded-lg border shadow-md mb-4"
          />
        )}

        {/* CONTENT */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Write your content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>

          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
