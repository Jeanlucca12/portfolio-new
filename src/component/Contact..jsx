import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    
<section>
    <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" mt-8 text-4xl text-center font-light bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent "
      >
        Entre em contato
      </motion.h2>
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="#home" class="text-base leading-6 text-gray-400 hover:text-gray-500">
                    Home
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#section1" class="text-base leading-6 text-gray-400 hover:text-gray-500">
                    Sobre mim
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#section2" class="text-base leading-6 text-gray-400 hover:text-gray-500">
                    Serviços 
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#section3" class="text-base leading-6 text-gray-400 hover:text-gray-500">
                    Projetos
                </a>
            </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="https://www.linkedin.com/in/jeanluccabueno/" target="_blank" rel="Jean Bueno Linkedin" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Linkedin</span>
                <FaLinkedin className="w-6 h-6"/>
            </a>
            <a href="https://github.com/Jeanlucca12" target="_blank" rel="Jean Bueno Github" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Github</span>
                <FaGithub className=" h-6 w-6"/>
            </a>  
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
        {CONTACT.address}
        </p>
        <a href="mailto:jeanluccabueno@gmail.com" target="_blank">
        <p className="mt-4 text-base leading-6 text-center text-gray-400">{CONTACT.email}</p>
      </a>
    </div>
</section>
  );
};

export default Contact;
