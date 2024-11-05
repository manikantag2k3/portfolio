import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  BookOpen,
  User2,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion"; 
import ProjectCard from "./components/ProjectCard";
import SkillCategory from "./components/SkillCategory";
import Section from "./components/Section";

function App() {
  const projects = [
    {
      title: "Multi-Trait Wheat Prediction",
      description:
        "Developed a web application to predict multiple traits of wheat plants based on genomic data, utilizing machine learning and deep learning models integrated with a user-friendly React frontend and Node.js backend.",
      techStack: ["React", "Node.js", "Python", "Machine Learning"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
      github: "https://github.com/manikantag2k3/multi-trait_PS",
       // Add your deployed link
    },
    {
      title: "Real-time Chat Application",
      description:
        "Built a real-time chat application with responsive design, utilizing React for frontend, and Firebase for real-time database and authentication, enabling instant messaging, user notifications, and chat room creation.",
      techStack: ["React", "Firebase", "JavaScript", "HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2000",
      github: "https://github.com/manikantag2k3/Realtime-chat-app",
      deployedLink: "https://miniproject-017.netlify.app", // Add your deployed link
    },
    {
      title: "Hotel Booking Application",
      description:
        "A full-featured booking application using the MERN stack with MongoDB, Express, React, and Node. It includes user authentication, Stripe payment processing, Cloudinary for image uploads, and an admin panel for managing bookings.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=2000",
      github: "https://github.com/manikantagandla2/hotel-booking",
       // Add your deployed link
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-3xl">
            <motion.h1
              className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Manikanta Gandla
            </motion.h1>
            <p className="text-2xl mb-8 text-blue-100 leading-relaxed">
              Passionate student eager to develop impactful tech solutions and
              continually grow and innovate in the tech field.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/manikantag2k3"
                className="group flex items-center bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/in/manikanta-gandla-292a43263/"
                className="group flex items-center bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                LinkedIn
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <Section title="About Me" icon={<User2 />}>
          <motion.div
            className="bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              I'm a Computer Science Engineering student with a strong
              foundation in software development, web technologies, and machine
              learning. Through personal and academic projects, I aim to build
              solutions that can positively impact lives.
            </p>
          </motion.div>
        </Section>

        {/* Skills Section */}
        <Section title="Skills" icon={<Cpu className="animate-pulse" />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Programming Languages"
              skills={["C", "C++", "Java", "Python", "JavaScript"]}
            />
            <SkillCategory
              title="Web Technologies"
              skills={[
                "React",
                "Node.js",
                "Express",
                "REST APIs",
                "Tailwind CSS",
              ]}
            />
            <SkillCategory
              title="Tools & Databases"
              skills={["MongoDB", "MySQL", "Git & GitHub", "Docker"]}
            />
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects" icon={<Code2 />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" icon={<BookOpen />}>
          <motion.div
            className="bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              Neil Gogte Institute of Technology
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Bachelor of Engineering in Computer Science (2021-present) | 8
              CGPA
            </p>
          </motion.div>
        </Section>

        {/* Contact Section */}
        <Section title="Contact" icon={<Mail />}>
          <motion.div
            className="bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-8 text-lg">
              I'm always open to discussing new projects, opportunities, or just
              having a chat about technology.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:manikantagandla2@gmail.com"
                className="group flex items-center justify-center bg-white/80 rounded-lg p-4 text-gray-700 hover:text-blue-600 hover:shadow-md transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                manikantagandla2@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/manikanta-gandla-292a43263/"
                className="group flex items-center justify-center bg-white/80 rounded-lg p-4 text-gray-700 hover:text-blue-600 hover:shadow-md transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </a>
              <a
                href="https://github.com/manikantag2k3"
                className="group flex items-center justify-center bg-white/80 rounded-lg p-4 text-gray-700 hover:text-blue-600 hover:shadow-md transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
}

export default App;
