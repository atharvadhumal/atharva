import React from 'react'
import Typewriter from './Typewriter'
import Coder from '../Lottie/coder.json'
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import { BiCoffeeTogo } from "react-icons/bi";
import Avatar from '../../assets/Avatar.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Home = () => {
    return (

        <>

            <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-12">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <div className='text-white'>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                Hi There! <span className='animate-wave inline-block origin-bottom-right'>👋🏻</span>
                            </h1>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                I'm <strong className="text-purple-500">Atharva Dhumal</strong>
                            </h1>
                            <div className="text-xl md:text-2xl text-gray-200 h-15">
                                <Typewriter />
                            </div>
                        </div>


                        <div className="flex justify-center md:justify-end">
                            <Tilt>
                                <Lottie
                                    className="illustration w-full max-w-md"
                                    animationData={Coder}
                                    loop={true}
                                />
                            </Tilt>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-12 py-16">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative">
                        LET ME <span className='text-purple-500'>INTRODUCE</span> MYSELF

                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
                        <div className="text-white backdrop-blur-sm bg-white/5 rounded-lg p-6 shadow-xl border border-purple-500/20 h-auto md:h-96">
                            <ul className='text-xl leading-relaxed space-y-4 list-none'>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                    <span>I build interactive web apps that make you fall in love with the experience—not me, lol.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                    <span>I want to do work that challenges me as a developer & work that I can be proud of.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                    <span>Currently learning and building projects on
                                        <span className="text-purple-500 font-semibold"> MERN </span>stack.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                    <span>I plan to learn
                                        <span className="text-purple-500 font-semibold"> Next.js, Three.js </span>and
                                        <span className="text-purple-500 font-semibold"> Typescript </span>in the near future.</span>
                                </li>

                                <li className="flex items-center">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span>Also, I love
                                        <span className="text-purple-500 font-semibold mx-2">coffee</span>
                                        <BiCoffeeTogo className="text-purple-400 inline-block transform rotate-12" style={{ scale: "1.5" }} />
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <Tilt className="hover:shadow-2xl transition-all duration-300" tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#c67ffd" glarePosition="all">
                                <img
                                    className='Avatar w-full max-w-md rounded-2xl border-4 border-purple-500/30 shadow-lg shadow-purple-500/20'
                                    src={Avatar}
                                    alt="Avatar"
                                />
                            </Tilt>
                        </div>

                        <div className='text-white text-center py-8 max-w-md mx-auto col-span-full'>
                            <h1 className="text-3xl font-bold mb-2">FIND ME ON</h1>
                            <p className="text-lg mb-6">Feel free to <span className="text-purple-500">connect</span> with me</p>
                            <div className="flex justify-center gap-6 mt-3">
                                <a href="https://github.com/atharvadhumal" target="_blank"
                                    className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-purple-300 transition-colors duration-300">
                                    <FaGithub size={24} className="text-purple-900" />
                                </a>
                                <a href="https://x.com/adhumal6" target="_blank"
                                    className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-purple-300 transition-colors duration-300">
                                    <FaXTwitter size={24} className="text-purple-900" />
                                </a>
                                <a href="http://www.linkedin.com/in/atharvadhumal24" target="_blank"
                                    className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-purple-300 transition-colors duration-300">
                                    <FaLinkedin size={24} className="text-purple-900" />
                                </a>
                                <a href="mailto:atharvadhumal256@gmail.com" 
                                    className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-purple-300 transition-colors duration-300">
                                    <SiGmail  size={24} className="text-purple-900" />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home