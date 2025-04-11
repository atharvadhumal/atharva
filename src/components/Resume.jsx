import { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Resume = () => {
  const [activeTab, setActiveTab] = useState('about');

  const resumeData = {
    name: "ATHARVA DHUMAL",
    title: "Frontend Developer",
    contact: {
      phone: "8689822200",
      location: "Thane, Maharashtra",
      email: "atharvadhumal256@gmail.com",
      github: "https://github.com/atharvadhumal",
      linkedin: "https://linkedin.com/in/atharvad24"
    },
    about: "Looking forward to an opportunity for working in a dynamic, challenging environment, where I can utilize my skills for developing my career and for the growth of the organization. Good hands-on experience development using HTML, CSS, JavaScript, React. Self–motivated, responsible and proper time management with good written, verbal and listening skill, commitment to co-operative teamwork. Ability to quickly master new concepts and applications.",
    education: [
      {
        school: "NEW HORIZON INSTITUTE OF TECHNOLOGY & MANAGEMENT",
        degree: "Bachelor's Of Technology in Artificial Intelligence and Data Science",
        year: "2022-2025"
      },
      {
        school: "FR. AGNEL POLYTECHNIC, VASHI",
        degree: "Diploma in Civil Engineering",
        year: "2019-2022"
      }
    ],
    skills: ["JavaScript", "HTML5", "CSS", "BootStrap", "React", "TailwindCSS"],
    experience: [
      {
        company: "Appaxon Solutions",
        position: "Frontend Developer Intern",
        period: "PRESENT",
        responsibilities: [
          "Develop responsive and cross-browser compatible web templates for commercial distribution across multiple marketplace platforms.",
          "Design modular components, including page layouts, sections, and hero elements. Implement clean, maintainable code, following industry best practices.",
          "Collaborate with team members via Slack, and utilise Git for version control."
        ]
      }
    ],
    projects: [
      {
        name: "Nexus Engineering Industries",
        description: "Developed a responsive, modern website for Nexus Engineering using React.js, React Router, and Tailwind CSS. Implemented a mobile-responsive design with an intuitive navigation system featuring smooth transitions and animations using Framer Motion. Created component-based architecture with reusable components including Navbar, Footer, Hero sections, and service cards. Built a multi-page application with router implementation for Home, About, Services, and Contact pages. Incorporated responsive image handling and flexible grid layouts to ensure compatibility across all device sizes. Integrated JSON data management for dynamic service content rendering.",
        
      },
      {
        name: "Personal Portfolio",
        description: "Created a responsive personal portfolio website using React.js and Vite to showcase my projects and skills. The website features: Modern UI with responsive design using Tailwind CSS for mobile and desktop experiences. Interactive components including animations, parallax effects, and typewriter animation. Multi-page architecture with client-side routing via React Router. GitHub activity visualization using the GitHub Calendar API. Optimized loading with Lottie animations and efficient component structure. Skills and tools showcase with interactive technology cards. Cross-browser compatibility and accessibility considerations.",
        technologies: "React.js, Vite, Tailwind CSS, React Router, Lottie animations, React Icons, React Typewriter Effect, Parallax Tilt",
        link: "https://atharvadhumal.vercel.app/"
      },
      {
        name: "Postgrestore | Full-Stack E-Commerce Application",
        description: "Developed a full-stack e-commerce product management system with React frontend and Node.js/Express backend. The application features responsive UI built with Tailwind CSS and DaisyUI, backed by PostgreSQL via Neon's serverless database. Implemented complete CRUD operations with real-time updates, centralized state management using Zustand, and security measures including API rate limiting and bot detection with Arcjet. Created efficient component structure with reusable patterns and integrated real-time notification system for enhanced user experience.",
        technologies: "React, Node.js, Express, PostgreSQL, Neon DB, Tailwind CSS, DaisyUI, Arcjet, Axios",
        link: "https://postgrestore-frontend.vercel.app/" 
      }
    ]
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-12">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-white bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-white">{resumeData.name}</h1>
            <p className="text-xl text-purple-500 mt-1">{resumeData.title}</p>

            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center text-gray-300 hover:text-purple-500 transition-colors">
                <Mail size={16} className="mr-1" />
                <span>{resumeData.contact.email}</span>
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center text-gray-300 hover:text-purple-500 transition-colors">
                <Phone size={16} className="mr-1" />
                <span>{resumeData.contact.phone}</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-1" />
                <span>{resumeData.contact.location}</span>
              </div>
              {resumeData.contact.github && (
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-500 transition-colors">
                  <FaGithub className="mr-1" size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {resumeData.contact.linkedin && (
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-500 transition-colors">
                  <FaLinkedin className="mr-1" size={16} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
              <button
                className={`py-2 px-4 ${activeTab === 'about' ? 'border-b-2 border-purple-500 text-purple-500' : 'text-gray-400 hover:text-white transition-colors'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'experience' ? 'border-b-2 border-purple-500 text-purple-500' : 'text-gray-400 hover:text-white transition-colors'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'education' ? 'border-b-2 border-purple-500 text-purple-500' : 'text-gray-400 hover:text-white transition-colors'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'skills' ? 'border-b-2 border-purple-500 text-purple-500' : 'text-gray-400 hover:text-white transition-colors'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'projects' ? 'border-b-2 border-purple-500 text-purple-500' : 'text-gray-400 hover:text-white transition-colors'}`}
                onClick={() => setActiveTab('projects')}
              >
                Projects
              </button>
            </div>

            {activeTab === 'about' && (
              <div className="text-gray-300">
                <p className="leading-relaxed">{resumeData.about}</p>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">{exp.position} @ {exp.company}</h3>
                    <p className="text-gray-400 mb-2">{exp.period}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                    <p className="text-gray-300">{edu.degree}</p>
                    <p className="text-gray-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-800 text-purple-400 border border-purple-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center mb-1">
                      <h3 className="text-lg font-semibold text-white mr-2">{project.name}</h3>
                      {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    {project.technologies && (
                      <p className="text-sm text-gray-400">
                        <span className="font-medium text-purple-500">Technologies:</span> {project.technologies}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/Resume-Atharva-Dhumal.pdf"
              download
              className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Download Resume
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;