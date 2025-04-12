import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const currentYear = new Date().getFullYear();
  
  const theme = {
    dark: [
      '#161b22',  
      '#4c1d95',  
      '#7c3aed',  
      '#8b5cf6', 
      '#a78bfa'  
    ]
  };

  return (
    <section className="py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className='text-white text-center mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold">
            Days <span className='text-purple-500'>I code</span>
          </h1>
        </div>
        
        <div className="flex justify-center p-4 text-white">
          <GitHubCalendar
            username='atharvadhumal'
            year={currentYear}
            colorScheme="dark"
            theme={theme}
            fontSize={16}
            blockSize={15}
            blockMargin={5}
          />
        </div>
      </div>
    </section>
  )
}

export default Github