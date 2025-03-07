import React from 'react'
import atharvalogo from '../assets/atharvalogo.png'
import { navItems } from '../constants/data'



const Navbar = () => {
    return (
        <>
            <nav>
                <div className='sticky top-0 flex justify-between items-center py-3  backdrop-blur-lg border-b border-neutral-700/80'>

                    {/* logo sec */}
                    <div className='text-2xl flex items-center gap-2 font-bold p-2'>
                        <img src={atharvalogo} className='w-10' alt="" />
                        <p className='text-white text-xl'>Atharva Dhumal</p>
                    </div>

                    {/* menu sec */}
                    <div>
                        <ul className='flex items-center gap-7 text-white text-lg mr-8'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href} className='py-1 px-3 flex items-center gap-1.5'>
                                        {item.icon}
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* mobile hamnurger menu sec */}
                </div>
            </nav>
            {/* Mobile sidebar sec */}
        </>
    )
}

export default Navbar