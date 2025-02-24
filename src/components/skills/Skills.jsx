import React from "react";
import SkillCard from "./SkillCard";

const Skills = ({ skills }) => (
  <section id="skills" className="py-24 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
