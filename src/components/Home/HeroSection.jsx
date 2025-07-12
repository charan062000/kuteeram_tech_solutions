import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";
import { motion } from "framer-motion";

const HeroSection = () => {
  const texts = [
    "Web Development",
    "Digital Marketing",
    "Web Design",
    "Business Consultancy",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeClass("fade-in");
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full md:w-fit   px-4 pt-24 pb-14 relative  h-fit bg-gradient-to-t from-indigo-50 to-white lg:rounded-b-full rounded-b-[120px] mx-auto"
    >
      <div className="flex flex-wrap  xl1:ml-56 xl2:ml-40 xl3:ml-16 lg:ml-14">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-mont font-extrabold text-sky-500 text-center  xl4:w-fit w-full ">
          KUTEERAM TECH SOLUTIONS |
        </h1>
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-poppins font-semibold text-gray-800  ml-5 xl4:w-fit  w-full text-center ">
          <div className={`text ${fadeClass} `}>{texts[currentTextIndex]}</div>
          {/* <div className={``}>Business Consultancy</div> */}
        </h1>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-center  mt-3 md:mt-5 w-11/12 md:w-1/2 font-poppins mx-auto">
        Welcome to KUTEERAM TECH SOLUTIONS! We`re dedicated experts, helping businesses
        thrive online with customized digital solutions that drive growth and
        enhance your presence.
      </p>

      <div className="flex gap-x-7 gap-y-3 flex-wrap mt-10">
        <NavLink to="/contact" className="mx-auto">
          <button className="btn w-fit px-5 rounded-full  bg-sky-500 hover:bg-sky-700 text-white font-bold text-2xl font-poppins">
            <PiPhoneCallFill />
            Book Appointment
          </button>
        </NavLink>
        {/* <a href="#ourServices" className="mx-auto">
        <button className="btn w-fit px-5 rounded-full  hover:bg-indigo-200 bg-transparent text-gray-800 font-bold text-xl font-poppins border border-gray-500">
          Read More <MdStart />
        </button>
      </a> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
