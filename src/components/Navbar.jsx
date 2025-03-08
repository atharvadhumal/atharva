import React, { useState } from 'react'
import atharvalogo from '../assets/atharvalogo.png'
import { navItems } from '../constants/data'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <nav className='sticky top-0 z-50'>
        <div className=' flex justify-between items-center py-2 sm:py-3 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 backdrop-blur-lg border-b border-neutral-700/80'>
          {/* logo sec */}
          <div className='flex items-center gap-1 sm:gap-2 font-bold'>
            <img src={atharvalogo} className='w-7 sm:w-8 md:w-10' alt="" />
            <p className='text-white text-sm sm:text-base md:text-xl whitespace-nowrap'>Atharva Dhumal</p>
          </div>
          
          {/* desktop menu sec */}
          <div className='hidden md:flex md:justify-end md:flex-1 overflow-x-auto pr-2'>
            <ul className='flex items-center md:gap-1 lg:gap-2 xl:gap-4 text-white text-sm md:text-base lg:text-lg'>
              {navItems.map((item, index) => (
                <li key={index} className='group flex-shrink-0'>
                  <a
                    href={item.href}
                    className='py-1 px-0.5 md:px-1 lg:px-2 xl:px-3 flex items-center gap-0.5 md:gap-1 relative whitespace-nowrap'
                  >
                    <span className="text-xs sm:text-sm md:text-base">{item.icon}</span>
                    <span>{item.label}</span>
                    <span className='absolute bottom-0 left-1 right-0 h-0.5 md:h-1 bg-[#c54dff] origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100'></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* mobile hamburger menu sec */}
          <div className='md:hidden flex items-center' onClick={() => setOpen(!open)}>
            <Hamburger size={20} toggled={open} color='#c54dff' />
          </div>
        </div>
      </nav>
      
      {/* Mobile sidebar sec */}
      {open && (
        <div className='md:hidden fixed top-[53px] left-0 right-0 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-700/80 z-40 max-h-[calc(100vh-53px)] overflow-y-auto'>
          <ul className='flex flex-col py-4 px-6 gap-4 text-white'>
            {navItems.map((item, index) => (
              <li key={index} className='group'>
                <a
                  href={item.href}
                  className='py-2 px-2 flex items-center gap-2 relative'
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar