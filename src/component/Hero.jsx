import React from 'react';
import ProfilePic from '../../public/profile2.jpg'; 
import {FaLinkedin} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    <header className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url('../../public/bg-filter.png')` }}>
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src={ProfilePic}
          alt="Profile"
          className="shadow-lg rounded-full w-[120px] h-[120px] object-cover"
        />
        <div className="text-center mt-6">
          <h1 className="text-white text-3xl font-bold">Jean Bueno</h1>
          <p className="text-blueGray-300 uppercase font-semibold mt-2">Front-end Developer</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/jeanluccabueno/" target="_blank" rel="Jean Bueno Linkedin">
              <button className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaLinkedin/>
              </button>
            </a>
            <a href="https://github.com/Jeanlucca12" target="_blank" rel="Jean Bueno Github">
              <button className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaGithub/>
              </button>
            </a>
            <a href="mailto:email@example.com">
              <button className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <FaEnvelope/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
