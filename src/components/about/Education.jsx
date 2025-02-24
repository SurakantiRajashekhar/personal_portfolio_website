import React from "react";

const Education = ({ education }) => {
  return (
    <div className="space-y-4">
      {education.map((q, index) => (
        <div key={index}>
          <p className="font-semibold text-lg">{q.qualification}</p>
          <p className="text-sm text-gray-500">{q.institution}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
