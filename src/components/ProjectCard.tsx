import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  github,
}) => {
  return (
    <div className="group bg-white/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-white/20">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={github}
          className="group/link inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <Github className="w-5 h-5 mr-2 group-hover/link:rotate-12 transition-transform" />
          View Project
          <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
