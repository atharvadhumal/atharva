import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tilt from 'react-parallax-tilt';
import { TbHandFingerRight } from "react-icons/tb";
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Github from './Github';

const About = () => {
  return (
    <>
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className='text-white'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get to <span className='text-purple-500'>know</span> me!
            </h1>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Hi, my name is <span className='text-purple-500 font-semibold'>Atharva Dhumal</span> and I am from <span className='text-purple-500 font-semibold'>Maharashtra, India.</span> I'm a <span className='text-purple-500 font-semibold'>Front-end Developer </span>and a final year college student pursuing <span className='text-purple-500 font-semibold'>BTech.</span>
              </p>
              <p>
                I am <span className='text-purple-500 font-semibold'>open to new collaborations</span> or work where I can contribute and grow. Feel free to <span className='text-purple-500 font-semibold'>connect with me</span>, links are in the footer.
              </p>
              <div>
                <p className="font-semibold mb-2">Apart from coding, some other activities that I love to do!</p>
                <div className="ml-2 space-y-2">
                  <div className="flex items-center">
                    <TbHandFingerRight className="text-purple-500 mr-2" />
                    <span>Playing Games</span>
                  </div>
                  <div className="flex items-center">
                    <TbHandFingerRight className="text-purple-500 mr-2" />
                    <span>Fitness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={800} scale={1.05} className="w-full max-w-md">
              <DotLottieReact
                src="https://lottie.host/80ec9b4f-7745-42e5-ab9f-08a8580bbd99/Lg8tSVAj6n.json"
                loop
                autoplay
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>

    <Techstack/>
    <Toolstack/>
    <Github/>
    </>
  )
}

export default About