
<article class="group grid rounded-xl max-w-2xl grid-cols-1 md:grid-cols-8 overflow-hidden border border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
    
    <div class="col-span-3 overflow-hidden">
        <img src="https://penguinui.s3.amazonaws.com/component-assets/card-img-4.webp" class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" alt="a men wearing VR goggles" />
    </div>
   
    <div class="flex flex-col justify-center p-6 col-span-5">
        <small class="mb-4 font-medium">Artificial Intelligence</small>
        <h3 class="text-balance text-xl font-bold text-black lg:text-2xl dark:text-white" aria-describedby="articleDescription">AI-Powered VR Goggles Redefine Reality: Augmented Vision for Al</h3>
        <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
            Experience the next level of augmented reality with smart
            goggles integrating cutting-edge AI for seamless interaction
            with the world around you.
        </p>
        <a href="#" class="w-fit font-medium text-blue-700 underline-offset-2 hover:underline focus:underline focus:outline-none dark:text-blue-600">
           Read full story
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2.5" aria-hidden="true" class="inline size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </div>
</article>


{/* 
    
    import React from 'react';
import {EXPERIENCES} from '../constants/index'  
import { animate, motion } from "framer-motion";

const Experience = () => {
  return (
      <div className="border-b border-neutral-800 pb-16">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:0.5, delay:0.5}}
        className='my-20 text-center text-violet-400 text-3xl font-light capitalize'>
        experience
        </motion.h2 >
        {EXPERIENCES.map((ele,i)=>{
        return<> 
        <div key={i} className='mb-10 flex flex-wrap lg:justify-center'>
          <motion.div
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.5, delay:0.5}}
          className='w-full lg:w-1/4 mb-2 '>
            <p className='font-semibold text-sm opacity-60 text-purple-500'>{ele.year}</p>
          </motion.div>
          <div className='w-full max-w-xl text-lg lg:w-3/4'>
            <motion.h6 
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0, y:100}}
             transition={{duration:0.5, delay:0.5}}
            className='mb-2 text-md font-thin lg:text-lg'>{ele.role}   - 
            <span className='text-sm opacity-70 text-purple-200'> {ele.company}</span>
            </motion.h6>
            <motion.p 
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0, y:100}}
             transition={{duration:0.5, delay:0.5}}
            className='mb-2 opacity-70 text-sm tracking-tight font-light lg:text-xl'>
              {ele.description}
            </motion.p>
            {ele.technologies.map((tech,index)=>
              <motion.span 
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0, y:100}}
              transition={{duration:0.5, delay:0.5}}
              key={index} className="ml-2 px-2 py-1 mt-2 text-sm bg-neutral-800 text-purple-400 opacity-55 rounded-xl">
                {tech}
              </motion.span>
            )}
          </div>
        </div>
        </>
        })}
      </div>
  )
}
export default Experience

    */}
