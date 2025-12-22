import { useState } from "react";

const Profile = () => {
  // 🌟 ข้อมูลเริ่มต้น
  const [user, setUser] = useState({
    username: "demoUser",
    email: "demo@example.com",
    status: "Member",
    avatar: "https://i.pravatar.cc/150?img=3", // รูปโปรไฟล์เริ่มต้น
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState({ ...user });

  // เก็บรูป preview ตอนแก้ไข
  const [previewImage, setPreviewImage] = useState(user.avatar);

  // 🟦 เมื่อผู้ใช้เลือกไฟล์รูปใหม่
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setPreviewImage(imageURL);

    // เก็บไฟล์จริงไว้ (จะส่ง backend ได้)
    setEditUser({
      ...editUser,
      avatarFile: file,
    });
  };

  // 🟩 ฟังก์ชันกด "บันทึก"
  const handleSave = () => {
    // หากแก้รูป ให้ใช้ previewImage เป็นรูปใหม่
    setUser({
      ...editUser,
      avatar: previewImage,
    });

    setIsEditing(false);
  };

  // 🟥 ฟังก์ชันกด "ยกเลิก"
  const handleCancel = () => {
    setEditUser(user);
    setPreviewImage(user.avatar);
    setIsEditing(false);
  };

  return (
    <div className="p-4 space-y-4">
      {/* โหมดดูโปรไฟล์ */}
      {!isEditing && (
        <>
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-28 h-28 rounded-full border shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold text-center mt-3">โปรไฟล์ผู้ใช้</h2>

          <div className="flex flex-col space-y-2">
            <p>
              <span className="font-semibold">ชื่อผู้ใช้:</span> {user.username}
            </p>
            <p>
              <span className="font-semibold">อีเมล:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">สถานะ:</span> {user.status}
            </p>
          </div>

          <div className="divider"></div>

          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-warning w-full"
          >
            แก้ไขโปรไฟล์
          </button>

          <button className="btn btn-error w-full">ลบบัญชี</button>
        </>
      )}

      {/* โหมดแก้ไขโปรไฟล์ */}
      {isEditing && (
        <>
          <h2 className="text-xl font-bold text-center">แก้ไขโปรไฟล์</h2>

          {/* แก้ไขรูปภาพ */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={previewImage}
              alt="preview avatar"
              className="w-32 h-32 rounded-full border shadow"
            />

            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="space-y-3 mt-3">
            <div>
              <label className="font-semibold">ชื่อผู้ใช้</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={editUser.username}
                onChange={(e) =>
                  setEditUser({ ...editUser, username: e.target.value })
                }
              />
            </div>

            <div>
              <label className="font-semibold">อีเมล</label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="font-semibold">สถานะ</label>
              <select
                className="select select-bordered w-full"
                value={editUser.status}
                onChange={(e) =>
                  setEditUser({ ...editUser, status: e.target.value })
                }
              >
                <option>Member</option>
                <option>VIP</option>
                <option>Admin</option>
              </select>
            </div>
          </div>

          <div className="divider"></div>

          <button onClick={handleSave} className="btn btn-success w-full">
            บันทึก
          </button>

          <button onClick={handleCancel} className="btn btn-ghost w-full">
            ยกเลิก
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
