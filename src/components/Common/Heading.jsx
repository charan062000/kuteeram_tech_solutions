import { motion } from "framer-motion";
import React from "react";

const Heading = ({ heading, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="w-fit relative mx-auto"
    >
      <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl  font-bold text-center w-fit mx-auto z-10 ">
        {heading}
      </h1>
      <motion.span
        whileInView={{
          scaleX: 1,
          originX: 2.5,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        initial={{ scaleX: 0 }}
        viewport={{ amount: 0.1 }}
        className={`absolute left-1/4 bottom-0 w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/4 h-5 ${color} -z-10`}
      ></motion.span>
    </motion.div>
  );
};

export default Heading;
