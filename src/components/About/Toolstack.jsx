import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiSlack } from "react-icons/si";


const Toolstack = () => {
  const tools = {
    'VS code': <VscVscode className="text-5xl"/>,
    'Vercel': <IoLogoVercel className="text-5xl"/>,
    'Github': <FaGithub className="text-5xl"/>,
    'Slack': <SiSlack className="text-5xl"/>,
  }
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className='text-white text-center mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className='text-purple-500'>Tools</span> I use
          </h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(tools).map(([tool, icon]) => (
            <div 
              key={tool} 
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-md hover:shadow-purple-500/20"
            >
              <div className="text-white hover:text-purple-500 transition-colors duration-500">
                {icon}
              </div>
              <p className="mt-4 text-white font-medium">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toolstack