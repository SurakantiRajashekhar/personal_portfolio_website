import React from "react";

const SkillCard = ({ title, description, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc pl-4 space-y-2">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
