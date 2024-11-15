import React from "react";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <>
      <div className="breadcrumbs text-sm -mt-3 mb-10 flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#ourServices">Services</Link>
          </li>
          <li>Digital Marketing</li>
        </ul>
      </div>

      <div className="w-fit">
        <Heading heading="Digital Marketing" color="bg-indigo-100" />
      </div>

      <div className=" flex flex-col lg:flex-row gap-5 items-center mt-3">
        <div className="lg:w-1/2">
          <p className="text-xl font-semibold font-poppins">
            Boost your website's success with our expert hosting and marketing
            team.
          </p>
          <p className="mt-4 font-poppins">
            At
            <span>
              <img
                src="/onlyIcon.png"
                alt="logo"
                className="w-3.5 inline-block ml-2 mr-1 "
              />
            </span>
            <strong> Esha Technology</strong>, we understand that every business
            is unique, and so are its marketing needs. That's why we offer
            tailor-made digital marketing solutions designed to boost your
            online presence, drive traffic, and maximize conversions.
          </p>
        </div>

        <div className=" flex justify-center ">
          <img
            src="/webHosting.png"
            alt="Professional Web Development"
            className="lg:w-3/4 object-cover w-full "
          />
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
