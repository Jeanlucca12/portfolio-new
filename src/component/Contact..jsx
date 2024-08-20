import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="text-center border-b border-neutral-800 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-16 text-4xl text-center font-light bg-gradient-to-r from-slate-500 via-white 
                    to-purple-500 bg-clip-text text-transparent "
      >
        Entre em contato
      </motion.h2>
      <p className="mb-2 text-sm tracking-tight">{CONTACT.address}</p>
      <p className="mb-2 text-sm tracking-tight">{CONTACT.phoneNo}</p>
      <a href="#">
        <p className="underline underline-offset-4">{CONTACT.email}</p>
      </a>
    </div>
  );
};

export default Contact;
