import React from "react";
import { motion } from "framer-motion";
import ImgGit from "../../public/git.png";
import ImgHtml from "../../public/html.png";
import ImgCss from "../../public/css.png";
import ImgJavascript from "../../public/javascript.png";
import ImgReact from "../../public/react.png";
import ImgTailwind from "../../public/tailwindcss.png";
import ImgNode from "../../public/nodejs.png";
import ImgFigma from "../../public/figma.png";

const TechNologies = () => {
  let contain = (dura) => ({
    hidden: { y: -10 },
    visible: {
      y: [5, -5],
      transition: {
        duration: dura,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center font-light bg-gradient-to-r from-slate-300 via-slate-400 
                    to-purple-500 bg-clip-text text-transparent "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="py-8 flex flex-wrap justify-center items-center gap-6"
      >
        <motion.div
          variants={contain(2.45)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgHtml}
            alt="HTML icon"
            className="w-20 h-20 text-7xl rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={contain(1.7)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgCss}
            alt="CSS icon"
            className="w-20 h-20 text-7xl rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={contain(2.2)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgJavascript}
            alt="JavaScript icon"
            className="w-20 h-20 text-7xl rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={contain(1.8)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgReact}
            alt="React icon"
            className="w-20 h-20 text-7xl rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={contain(2.5)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgGit}
            alt="git icon"
            className="w-20 h-20 text-7xl rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={contain(1.6)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgNode}
            alt="NodeJS icon"
            className="w-20 h-20 text-7xl rounded-2xl "
          />
        </motion.div>

        <motion.div
          variants={contain(1.6)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgTailwind}
            alt="TailwindCss icon"
            className="w-20 h-20 text-7xl rounded-2xl "
          />
        </motion.div>

        <motion.div
          variants={contain(1.6)}
          initial="hidden"
          animate="visible"
          className=" rounded-2xl bg-slate-800 p-5"
        >
          <img
            src={ImgFigma}
            alt="Figma icon"
            className="w-20 h-20 text-7xl rounded-2xl "
          />
        </motion.div>

      </motion.div>

      

    </div>
  );
};

export default TechNologies;
