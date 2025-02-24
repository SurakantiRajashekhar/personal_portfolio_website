import React from "react";

const Card = ({ icon, title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-bold text-xl">{title}</h3>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default Card;
