import React from "react";

const ProjectCard = ({ title, type, description, demoLink, githubLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{type}</p>
      <ul className="list-disc text-gray-600 mb-4">
        {description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>

      <div className="flex gap-2">
        <a
          href={demoLink}
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
        >
          View Project
        </a>
        <a
          href={githubLink}
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
