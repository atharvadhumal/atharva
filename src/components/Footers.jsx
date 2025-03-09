import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/atharvalogo.png'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footers = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <img src={logo} alt="Nexus Logo" className="h-9 w-10 mr-2" />
                <span className="text-xl font-semibold">Atharva Dhumal</span>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Connect With Me</h3>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a 
                    href="https://github.com/atharvadhumal" 
                    target="_blank" 
                    
                    className="text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href="http://www.linkedin.com/in/atharvadhumal24" 
                    target="_blank" 
                    
                    className="text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a 
                    href="mailto:atharvadhumal256@gmail.com"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <SiGmail size={24} />
                  </a>
                  <a 
                    href="https://x.com/adhumal6" 
                    target="_blank" 
                    
                    className="text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaXTwitter size={24} />
                  </a>
                  
                </div>
              </div>
            </div>

           {/* links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Quick Links</h3>
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                   
                  > 
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                    
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/projects" 
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resume" 
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
   
   
          {/* date */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Atharva Dhumal. All rights reserved.
              </p>
      
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footers