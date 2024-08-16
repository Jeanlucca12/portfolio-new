import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-10">
      <h2 className="text-center my-20 text-3xl text-[#9ba9fcf4] font-medium opacity-85">
        Projects
      </h2>

      <section className="mx-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <article class="group grid rounded-xl max-w-2xl grid-cols- md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <div class="col-span-3 overflow-hidden">
            <img
              src="/public/links.png"
              class="h-52 md:h-full w-full object-center object-cover transition duration-700 ease-out group-hover:scale-105"
              alt="links"
            />
          </div>

          <div class="flex flex-col justify-center p-6 col-span-5">
            <small class="mb-4 font-medium">Web Development</small>
            <h3
              class="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white"
              aria-describedby="articleDescription"
            >
              Jean Bueno - Links
            </h3>
            <p
              id="articleDescription"
              class="my-4 max-w-lg text-pretty text-sm"
            >
              This project was created to store and display the user's main
              useful links. With it, you can navigate between Linkedin,
              Portfolio and Github.
            </p>

            <div className="flex flex-col items-start w-fit">
              <a
                href="https://jeanbueno-links.vercel.app/"
                className="px-2 font-medium text-neutral-800 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-white"
                target="_blank"
              >
                <span className="flex items-center">
                  View the project
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
        <article class="group grid rounded-xl max-w-2xl grid-cols- md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <div class="col-span-3 overflow-hidden">
            <img
              src="/public/dev-burguer.png"
              class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              alt="Restaurant project"
            />
          </div>

          <div class="flex flex-col justify-center p-6 col-span-5">
            <small class="mb-4 font-medium">Design / Web Development</small>
            <h3
              class="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white"
              aria-describedby="articleDescription"
            >
              Dev Burguer
            </h3>
            <p
              id="articleDescription"
              class="my-4 max-w-lg text-pretty text-sm"
            >
              This is an online menu website, where the customer can place an
              order by adding and removing items to the cart, and at the end a
              message will be sent to the restaurant's Whatsapp.
            </p>

            <div className="flex flex-col items-start w-fit">
              <a
                href="https://jeanbueno-links.vercel.app/"
                className="px-2 font-medium text-neutral-800 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-white"
                target="_blank"
              >
                <span className="flex items-center">
                  View the project
                  <FaArrowRight className="ml-2" />
                </span>
              </a>
              <div className="gap-4 flex items-center mt-6 space-x-2">
                <FaGithub className="h-5 w-5" />
                <IoLogoFigma className="h-5 w-5" />
                <FaHtml5 className="h-5 w-5"/>
                <FaCss3Alt className="h-5 w-5"/>
                <RiTailwindCssFill className="h-5 w-5" />
              </div>
            </div>
          </div>
        </article>

        {/* Card 3 */}
        <article class="group grid rounded-xl max-w-2xl grid-cols- md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <div class="col-span-3 w-56">
            <img
              src="/public/movies.png"
              class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              alt="Movies Project"
            />
          </div>

          <div class="flex flex-col justify-center p-6 col-span-5">
            <small class="mb-4 font-medium">Web Development</small>
            <h3
              class="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white"
              aria-describedby="articleDescription"
            >
              Project PrimeFlix
            </h3>
            <p
              id="articleDescription"
              class="my-4 max-w-lg text-pretty text-sm"
            >
              This is a study project on ReactJS. It was created using an API
              for the films currently showing at the cinema and in it you can
              check more details and also the trailer for the film in question.
            </p>

            <div className="flex flex-col items-start w-fit">
              <a
                href="https://jeanbueno-links.vercel.app/"
                className="px-2 font-medium text-neutral-800 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-white"
                target="_blank"
              >
                <span className="flex items-center">
                  View the project
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
  );
};

export default Projects;
