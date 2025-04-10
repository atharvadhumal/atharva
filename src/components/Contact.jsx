import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setIsError(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsError(true);
        },
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-12">
      <div className="w-full max-w-md mx-auto">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            Got a cool <span className="text-purple-500">idea</span> that needs digital implementation?
          </h1>
          
          <div className="text-lg leading-relaxed space-y-4 mb-8 text-center">
            <p>
              Feel free to <span className="text-purple-500 font-semibold">reach out</span> if you have a project in mind or just want to <span className="text-purple-500 font-semibold">connect</span>. I'm always open to discussing new opportunities and collaborations.
            </p>
            <p>
              Fill out the form with your details, and I'll get back to you as soon as possible!
            </p>
          </div>

          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="space-y-4 bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-md"
          >
            <div className="flex flex-col">
              <label className="text-purple-500 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required
                className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-purple-500 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                name="user_email"
                required 
                className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-purple-500 mb-2 font-medium">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <TbSend className="mr-2" /> Send Message
            </button>

            {isSubmitted && (
              <div className="bg-green-500 bg-opacity-20 border border-green-500 p-3 rounded-md text-center text-white">
                Message sent successfully!
              </div>
            )}
            
            {isError && (
              <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 p-3 rounded-md text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;