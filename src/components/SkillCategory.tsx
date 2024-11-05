import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-white/20">
      <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="group px-4 py-2 bg-white/80 text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
