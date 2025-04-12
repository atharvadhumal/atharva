import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { TbFileTypeCss } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Techstack = () => {
  const icons = {
    'JavaScript': <IoLogoJavascript className="text-5xl" />,
    'CSS': <TbFileTypeCss className="text-5xl" />,
    'HTML': <TiHtml5 className="text-5xl" />,
    'Bootstrap': <FaBootstrap className="text-5xl" />,
    'React': <FaReact className="text-5xl" />,
    'Tailwind': <RiTailwindCssFill className="text-5xl" />,
  }

  return (
    <section className="py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className='text-white text-center mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold">
            Professional <span className='text-purple-500'>Skillset</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Object.entries(icons).map(([skill, icon]) => (
            <div 
              key={skill} 
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-md hover:shadow-purple-500/20"
            >
              <div className="text-white hover:text-purple-500 transition-colors duration-500">
                {icon}
              </div>
              <p className="mt-4 text-white font-mediuam">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Techstack
