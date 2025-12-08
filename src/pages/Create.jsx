import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // สำหรับตอนนี้แค่ log ข้อมูลออก console
    console.log({ title, description, image });

    // รีเซ็ตฟอร์ม
    setTitle("");
    setDescription("");
    setImage("");

    alert("โพสต์ถูกสร้างเรียบร้อยแล้ว!");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">สร้างโพสต์ใหม่</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">หัวข้อโพสต์</span>
          </label>
          <input
            type="text"
            placeholder="ใส่หัวข้อโพสต์ของคุณ"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">เนื้อหา</span>
          </label>
          <textarea
            placeholder="ใส่เนื้อหาโพสต์ของคุณ"
            className="textarea textarea-bordered w-full h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">URL รูปภาพ</span>
          </label>
          <input
            type="text"
            placeholder="วาง URL รูปภาพของคุณ"
            className="input input-bordered w-full"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            สร้างโพสต์
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
