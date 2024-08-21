import React from "react";
import { motion } from "framer-motion";
import aboutMe from "../../public/foto.jpg";
import { ABOUT_TEXT, ABOUT_TEXT2, ABOUT_TEXT3 } from "../constants/index";
import {FaArrowRight} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'
import ImgBrazil from "../../public/brazil.svg";

const AboutMe = () => {
  return (
    <section id="section1">
      <div className=" border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center font-light bg-gradient-to-r from-slate-200 to-white 
                     bg-clip-text text-transparent "
      >
        Sobre mim
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:p-8 lg:w-1/2"
        >

<div className="relative flex items-center justify-center">
  <img className="w-2/3 rounded-xl" src={aboutMe} alt="AboutMe" />
</div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >

            <span className="text-white text-2xl my-2 inline-flex items-center"> 
            Olá! Veja quem está por trás do código <FaCode className="ml-4"/> 
              
             <div class="flex justify-center items-center"/>
            <div class="flex items-center justify-center w-6 h-6 mx-2 overflow-hidden rounded-full">
            <img src={ImgBrazil} className="border-none"/>
            </div>
            </span>

              <div className="mt-8">
              {ABOUT_TEXT}
              </div>
              
              <div className="mt-8">
              {ABOUT_TEXT2}
              </div> 

              <div className="mt-8">
               <span className="font-semibold"> {ABOUT_TEXT3} </span> 
              </div>
              
              <div className="mt-16 flex items-center gap-8 ">

              <a 
              href="/public/resume.pdf" 
              target="_blank"
              download="resume.pdf" 
              className="bg-gray-800 text-white rounded-md px-6 py-3 flex items-center hover:bg-gray-700 transition-colors"
            >
              Currículo
              <FaArrowRight className="ml-2" />
            </a>


      <a href="https://www.linkedin.com/in/jeanluccabueno/" target="_blank" className="text-white hover:underline sm:underline">LinkedIn</a>
      <a href="https://github.com/Jeanlucca12" target="_blank" className="text-white hover:underline">Github</a>
      <a href="#" className="text-white hover:underline">Figma</a>
    </div>

            </motion.p>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default AboutMe;
