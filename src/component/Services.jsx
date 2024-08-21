import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import ImgService from "../../public/service.jpg";

export default function Services() {
  return (
    <section id="section2" className="border-b border-neutral-800 pb-20">
      <div className="container px-6 py-10 mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center font-light bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent "
      >
        Serviços
      </motion.h2>

      
        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="mt-6 grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaCode className="w-6 h-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Desenvolvimento Web</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Criação de sites modernos e responsivos, utilizando as mais recentes tecnologias web para garantir desempenho, segurança e uma experiência de usuário excepcional.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaPencilRuler className="w-6 h-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">UX/UI Design</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Designs de interfaces que aliam beleza e funcionalidade, focados na experiência do usuário para criar produtos digitais intuitivos e agradáveis ​​de usar.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaMobile className="h-6 w-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Mobile Design</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Design de interfaces mobile otimizadas para diferentes dispositivos, garantindo uma experiência fluida e agradável em qualquer tela.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaLightbulb className="w-6 h-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700  dark:text-white">Ideias e Ajustes</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Transforme suas ideias em realidade! Ofereço suporte para ajustes, melhorias e implementação de novas funcionalidades no seu projeto digital.
              </p>
            </div>
          </div>

          <div className="mt-6 hidden lg:flex lg:w-1/2 lg:justify-center">
            <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[28rem] xl:h-[28rem] rounded-full" src={ImgService} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

