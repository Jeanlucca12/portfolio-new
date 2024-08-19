import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

export default function Services() {
  return (
    <section id="section2" className="border-b border-neutral-800 pb-20">
      <div className="container px-6 py-10 mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center font-light bg-gradient-to-r from-slate-500 via-white
                    to-purple-500 bg-clip-text text-transparent "
      >
        Services
      </motion.h2>

      
        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="mt-6 grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaCode className="w-6 h-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Web Development</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Creation of modern and responsive websites, using the latest web technologies to guarantee performance, security and an exceptional user experience.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaPencilRuler className="w-6 h-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">UX/UI Design</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Interface designs that combine beauty and functionality, focused on the user experience to create digital products that are intuitive and pleasant to use.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaMobile className="h-6 w-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Mobile Design</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Design of mobile interfaces optimized for different devices, ensuring a fluid and pleasant experience on any screen.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaLightbulb className="w-6 h-6"/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Ideas and adjustments</h1>

              <p className="text-gray-500 dark:text-gray-300">
              Turn your ideas into reality! I offer support for adjustments, improvements and implementation of new features in your digital project.
              </p>
            </div>
          </div>

          <div className="mt-6 hidden lg:flex lg:w-1/2 lg:justify-center">
            <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[28rem] xl:h-[28rem] rounded-full" src="/public/service.jpg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

