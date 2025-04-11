import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import portfolio from '../assets/portfolio.png';
import store from '../assets/store.png';
import nexus from '../assets/nexus.png'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "Postgrestore | Full-Stack E-Commerce Application",
      description: "Developed a full-stack e-commerce product management system with React frontend and Node.js/Express backend. The application features responsive UI built with Tailwind CSS, backed by PostgreSQL via Neon's serverless database.",
      technologies: "React, Node.js, Express, PostgreSQL, Neon DB, Zustand, Tailwind CSS, Framer Motion, Arcjet, Axios",
      image: store,
      liveUrl: "https://postgrestore-frontend.vercel.app/",
      githubUrl: "https://github.com/atharvadhumal/postgrestore-frontend"
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Created a responsive personal portfolio website using React.js and Vite to showcase my projects and skills. The website features Modern UI with responsive design using Tailwind CSS for mobile and desktop experiences.",
      technologies: "React.js, Vite, Tailwind CSS, React Router, Lottie animations, React Icons, React Typewriter Effect, Parallax Tilt",
      image: portfolio,
      liveUrl: "https://atharvadhumal.vercel.app/",
      githubUrl: "https://github.com/atharvadhumal/atharva"
    },
    {
      id: 3,
      name: "Nexus Engineering",
      description: "Developed a responsive, modern website for Nexus Engineering using React.js, React Router, and TailwindCSS. Built a multi-page application with router implementation for Home, About, Services, and Contact pages.Integrated JSON data management for dynamic service content rendering",
      technologies: "React.js, Vite, Tailwind CSS, React Router, Lottie animations, React Icons, React Typewriter Effect, Parallax Tilt",
      image: nexus,
      liveUrl: "https://www.nexus-eng.in/",
      githubUrl: "https://github.com/atharvadhumal/Nexus"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <figure className="h-56 overflow-hidden border-b border-gray-700">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </figure>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(', ').slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-block bg-gray-800 text-purple-400 border border-purple-500 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.split(', ').length > 4 && (
                    <span className="inline-block bg-gray-800 text-gray-300 border border-gray-600 px-3 py-1 rounded-full text-xs">
                      +{project.technologies.split(', ').length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-end gap-3 mt-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-sm font-medium text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;