import React from "react";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import WebDevExpertCard from "../WebDevelopment/WebDevExpertCard";
import {
  FaRegLightbulb,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaRegUser,
  FaUsers,
} from "react-icons/fa";

import { RiDatabaseLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";

const BusinessConsultancy = () => {
  const features = [
    {
      title: "Business Strategy & Planning",
      description:
        "Whether you need to redefine your business strategy or develop a comprehensive plan for the future, we provide expert insights that shape a roadmap for sustainable growth.",
      icon: <FaRegLightbulb />,
      color: "bg-indigo-100",
    },
    {
      title: "Operational Efficiency Optimization",
      description:
        "Streamline your processes, reduce waste, and improve productivity. Our consultants analyze and optimize your business operations to help you do more with less.",
      icon: <FaCogs />,
      color: "bg-green-100",
    },
    {
      title: "Technology Integration",
      description:
        "Harness the power of technology to drive innovation, improve service delivery, and scale faster. We specialize in integrating the latest tools to help you achieve your business objectives.",
      icon: <FaRocket />,
      color: "bg-blue-100",
    },
    {
      title: "Financial Consulting & Risk Management",
      description:
        "Navigate financial complexities with confidence. Our financial experts help with budgeting, forecasting, risk management, and making data-driven financial decisions that protect and grow your assets.",
      icon: <FaChartLine />,
      color: "bg-yellow-100",
    },
    {
      title: "Market Research & Business Intelligence",
      description:
        "Make informed decisions with in-depth market research and data-driven insights. Our business intelligence solutions empower you to understand market trends, consumer behavior, and industry shifts.",
      icon: <FaRegUser />,
      color: "bg-purple-100",
    },
    {
      title: "Leadership & Team Development",
      description:
        "Build strong, motivated teams that deliver. We provide leadership coaching, team-building strategies, and organizational development plans to create a high-performing culture within your company.",
      icon: <FaUsers />,
      color: "bg-pink-100",
    },
  ];
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
          <li>Business Consultancy</li>
        </ul>
      </div>

      <div className="w-fit">
        <Heading heading="Business Consultancy" color="bg-orange-100" />
      </div>

      <div className=" flex flex-col lg:flex-row gap-5 items-center">
        <div className="lg:w-1/2">
          <p className="text-xl font-semibold font-poppins">
            The Future Of you Business Starts Here!
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
            <strong> Esha Technology</strong>, we don’t just offer
            consultancy—we drive transformation. Our expert team delivers
            tailored solutions that boost growth, efficiency, and profitability.
            Whether you're a startup or an established business, we provide the
            guidance and expertise to help you thrive in today’s fast-paced
            market.
          </p>
        </div>

        <div className=" flex justify-center ">
          <img
            src="/businessC.png"
            alt="Professional Web Development"
            className="lg:w-3/4 object-cover w-full "
          />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-medium font-poppins lg:text-3xl text-xl">
          Why Choose Esha Technology?
        </h1>
      </div>

      <div>
        {features.map((feature, index) => (
          <WebDevExpertCard
            key={index}
            heading={feature.title}
            subHeading={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </div>

      <div className="mb-20">
        <div className="mt-20">
          <h1 className="font-extrabold  lg:text-3xl text-xl ">
            Want to Transform Your Business?
          </h1>
          <h1 className="font-medium font-poppins lg:text-2xl text-xl mt-5">
            Contact us today to discover how our business consultancy services
            can help you navigate challenges, seize opportunities, and achieve
            lasting success.
          </h1>
        </div>
        <Link to="/contact">
          <button className="btn btn-primary text-base mt-10">
            <GrContactInfo className="text-3xl" />
            Contact us to Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default BusinessConsultancy;
