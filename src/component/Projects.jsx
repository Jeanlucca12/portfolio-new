import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import ImgLinks from '/public/jean-links.png'
import ImgDevburguer from '/public/dev-burguer.png'
import ImgPrimeflix from '/public/primeflix.png'

const Projects = () => {
  return (
    <section id="section3">
      <div className="border-b border-neutral-800 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center font-light bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent "
      >
        Projetos
      </motion.h2>

      <section className="mx-6 grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Card 1 */}
  <article className="group grid rounded-xl max-w-2xl grid-cols-1 md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
    <div className="col-span-3 overflow-hidden">
      <img
        src={ImgLinks}
        className="h-52 md:h-full w-full object-center object-cover transition duration-700 ease-out group-hover:scale-105"
        alt="links"
      />
    </div>

    <div className="flex flex-col justify-center p-6 col-span-5">
      <small className="mb-4 font-medium">Desenvolvimento Web</small>
      <h3 className="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white" aria-describedby="articleDescription">
        Jean Bueno - Links
      </h3>
      <p id="articleDescription" className="my-4 max-w-lg text-pretty text-sm">
      Este projeto foi criado para armazenar e exibir os principais links úteis do usuário. Com ele, você pode navegar entre Linkedin, Portfólio e Github.
      </p>

      <div className="flex flex-col items-start w-fit">
        <a
          href="https://jeanbueno-links.vercel.app/"
          className="px-1 font-medium text-neutral-800 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-white"
          target="_blank"
        >
          <span className="flex items-center">
            Veja o projeto
            <FaArrowRight className="ml-2" />
          </span>
        </a>
        <div className="gap-4 flex items-center mt-6 space-x-2">
          <FaGithub className="h-5 w-5" />
          <IoLogoFigma className="h-5 w-5" />
          <RiReactjsLine className="h-5 w-5" />
          <RiFirebaseFill className="h-5 w-5" />
          <RiJavascriptFill className="h-5 w-5" />
          <RiTailwindCssFill className="h-5 w-5" />
        </div>
      </div>
    </div>
  </article>

  {/* Card 2 */}
  <article className="group grid rounded-xl max-w-2xl grid-cols-1 md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
    <div className="col-span-3 overflow-hidden">
      <img
        src={ImgDevburguer}
        className="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        alt="Restaurant project"
      />
    </div>

    <div className="flex flex-col justify-center p-6 col-span-5">
      <small className="mb-4 font-medium">Design / Desenvolvimento Web</small>
      <h3 className="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white" aria-describedby="articleDescription">
        Dev Burguer
      </h3>
      <p id="articleDescription" className="my-4 max-w-lg text-pretty text-sm">
      Este é um site de cardápio online, onde o cliente pode fazer um pedido adicionando e retirando itens do carrinho, e ao final será enviada uma mensagem para o Whatsapp do restaurante.
      </p>

      <div className="flex flex-col items-start w-fit">
        <a
          href="https://jeanbueno-links.vercel.app/"
          className="px-1 font-medium text-neutral-800 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-white"
          target="_blank"
        >
          <span className="flex items-center">
            Veja o projeto
            <FaArrowRight className="ml-2" />
          </span>
        </a>
        <div className="gap-4 flex items-center mt-6 space-x-2">
          <FaGithub className="h-5 w-5" />
          <IoLogoFigma className="h-5 w-5" />
          <FaHtml5 className="h-5 w-5" />
          <FaCss3Alt className="h-5 w-5" />
          <RiTailwindCssFill className="h-5 w-5" />
        </div>
      </div>
    </div>
  </article>

  {/* Card 3 */}
  <article className="group grid rounded-xl max-w-2xl grid-cols-1 md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
    <div className="col-span-3 overflow-hidden">
      <img
        src={ImgPrimeflix}
        className="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        alt="Movies Project"
      />
    </div>

    <div className="flex flex-col justify-center p-6 col-span-5">
      <small className="mb-4 font-medium">Desenvolvimento Web</small>
      <h3 className="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white" aria-describedby="articleDescription">
        Projeto PrimeFlix
      </h3>
      <p id="articleDescription" className="my-4 max-w-lg text-pretty text-sm">
      Este é um projeto de estudo sobre ReactJS. Ele foi criado utilizando uma API para os filmes em exibição no cinema e nele você pode conferir mais detalhes e também o trailer do filme em questão.
      </p>

      <div className="flex flex-col items-start w-fit">
        <a
          href="https://jeanbueno-links.vercel.app/"
          className="px-1 font-medium text-neutral-800 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-white"
          target="_blank"
        >
          <span className="flex items-center">
            Veja o projeto
            <FaArrowRight className="ml-2" />
          </span>
        </a>
        <div className="gap-4 flex items-center mt-6 space-x-2">
          <FaGithub className="h-5 w-5" />
          <IoLogoFigma className="h-5 w-5" />
          <RiReactjsLine className="h-5 w-5" />
          <RiJavascriptFill className="h-5 w-5" />
          <RiTailwindCssFill className="h-5 w-5" />
        </div>
      </div>
    </div>
  </article>
</section>

    </div>
    </section>
    
  );
};

export default Projects;
