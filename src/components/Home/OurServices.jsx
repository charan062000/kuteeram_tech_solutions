import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { delay, motion } from "framer-motion";

const OurServices = () => {
  const targetSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#ourServices" && targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div
      className="py-16 md:mt-5 lg:mt-16"
      ref={targetSectionRef}
      id="ourServices"
    >
      <Heading heading="Our Services" color="bg-sky-200" />

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
          className=" duration-200 border w-full  md:w-[500px] px-5 py-10 bg-amber-50 rounded-3xl mx-5 mb-10"
          id="hoverAnimation"
        >
          <Link
            to="services/web-development"
            className=" flex flex-col sm:flex-row justify-center items-center  "
          >
            <img
              src="https://digital8.com.au/wp-content/uploads/2016/12/Blog-post-on-web-dev-.jpg"
              alt="Web Development"
              className="w-full sm:w-48 h-[250px] sm:h-[350px] object-cover object-center rounded-3xl"
            />
            <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-bold text-xl sm:text-2xl mb-4">
                Web Development
              </h2>
              <p className="text-base sm:text-lg mb-4">
                We offer top-notch web development services to help you create
                stunning and functional websites. Whether it's a simple landing
                page or a complex web application, we ensure the best quality
                and performance for your needs.
              </p>
              <Link
                to="services/web-development"
                className="text-sky-600 font-medium hover:underline flex gap-1"
              >
                Read More <TbExternalLink className="mt-1 " />
              </Link>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
          className=" duration-200  border w-full  md:w-1/2 px-5 py-10 bg-indigo-50 rounded-3xl mx-5 mb-10 "
          id="hoverAnimation"
        >
          <Link
            to="services/web-hosting"
            className="flex flex-col sm:flex-row justify-center items-center"
          >
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2024/10/best-side-hustle-ideas-1-1-1024x596.png"
              alt="Web Hosting"
              className="w-full sm:w-48 h-[250px] sm:h-[350px] object-cover object-center rounded-3xl"
            />
            <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-bold text-xl sm:text-2xl mb-4">
                Web Hosting
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Our web hosting services offer reliable, secure, and scalable
                solutions to ensure your website is accessible to users around
                the clock. Choose from a variety of plans tailored to meet your
                business needs.
              </p>
              <Link
                to="services/web-hosting"
                className="text-sky-600 font-medium hover:underline flex gap-1"
              >
                Read More <TbExternalLink className="mt-1 " />
              </Link>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some" }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="duration-200  border w-full  md:w-1/2 px-5 py-10 bg-indigo-50 rounded-3xl mx-5 mb-10 "
          id="hoverAnimation"
        >
          <Link
            to="services/digital-marketing"
            className=" flex flex-col sm:flex-row justify-center items-center "
          >
            <img
              src="https://www.blissmarcom.com/wp-content/uploads/2024/04/How-the-Digital-Marketing-Agency-in-Noida-Stands-Out.jpeg"
              alt="Digital Marketing"
              className="w-full sm:w-48 h-[250px] sm:h-[350px] object-cover object-center rounded-3xl"
            />
            <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-bold text-xl sm:text-2xl mb-4">
                Digital Marketing
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Enhance your online presence with our comprehensive digital
                marketing services, including SEO, social media marketing, and
                content creation. Drive engagement and growth with strategies
                tailored to your audience.
              </p>
              <Link
                to="services/digital-marketing"
                className="text-sky-600 font-medium hover:underline flex gap-1"
              >
                Read More <TbExternalLink className="mt-1 " />
              </Link>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some" }}
          transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
          className="  duration-200 border w-full  md:w-[500px] px-5 py-10 bg-emerald-50 rounded-3xl mx-5 mb-10 "
          id="hoverAnimation"
        >
          <Link
            to="services/business-consultancy"
            className="flex flex-col sm:flex-row justify-center items-center "
          >
            <img
              src="https://5.imimg.com/data5/CN/HB/GLADMIN-36236926/consulting-service-500x500.jpg"
              alt="Business Consultancy"
              className="w-full sm:w-48 h-[250px] sm:h-[350px] object-cover object-center rounded-3xl"
            />
            <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-bold text-xl sm:text-2xl mb-4">
                Business Consultancy
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Our expert consultancy services are designed to help you
                navigate business challenges, improve operational efficiency,
                and achieve sustainable growth. Let's build a roadmap to success
                together.
              </p>
              <Link
                to="services/business-consultancy"
                className="text-sky-600 font-medium hover:underline flex gap-1"
              >
                Read More <TbExternalLink className="mt-1 " />
              </Link>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
