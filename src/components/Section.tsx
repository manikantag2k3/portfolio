import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, icon }) => {
  return (
    <section className="mb-24 animate-[fadeIn_1s_ease-out]">
      <div className="flex items-center mb-12 group">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-lg mr-4 group-hover:shadow-xl transition-shadow">
          {icon}
        </div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
