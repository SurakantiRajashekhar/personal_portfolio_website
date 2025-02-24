import React from "react";

const ProfileImage = ({ profileImage }) => {
  return (
    <div className="md:w-1/3">
      <img
        src={profileImage}
        alt="Profile Photo"
        className="w-96 h-96 rounded-full mx-auto shadow-[0_6px_20px_rgba(255,255,255,0.9)]"
      />
    </div>
  );
};

export default ProfileImage;
