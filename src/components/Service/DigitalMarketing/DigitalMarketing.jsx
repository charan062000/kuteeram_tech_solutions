import React from "react";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import { TbUserQuestion } from "react-icons/tb";
import {
  FaSearch,
  FaAd,
  FaUsers,
  FaEnvelope,
  FaLaptopCode,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import WebDevExpertCard from "../WebDevelopment/WebDevExpertCard";
import { GrContactInfo } from "react-icons/gr";

const DigitalMarketing = () => {
  const features = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's search engine ranking to attract more organic visitors. With proven strategies, we ensure your site gets the visibility it deserves on search engines like Google.",
      icon: <FaSearch />,
      icon_url: "https://react-icons.github.io/react-icons/icons/fa/fa-search/",
      color: "bg-blue-100", // Tailwind background color (you can randomize it)
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Get immediate traffic to your site through targeted, cost-effective ads. We run high-converting campaigns across platforms like Google Ads and Facebook Ads to boost your business.",
      icon: <FaAd />,
      icon_url: "https://react-icons.github.io/react-icons/icons/fa/fa-ad/",
      color: "bg-red-100",
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your brand's presence on social media platforms like Facebook, Instagram, Twitter, and LinkedIn. Build engagement, interact with your audience, and increase conversions through strategic content and ads.",
      icon: <FaUsers />,
      icon_url: "https://react-icons.github.io/react-icons/icons/fa/fa-users/",
      color: "bg-green-100",
    },
    {
      title: "Email Marketing",
      description:
        "Stay top of mind and nurture your leads with personalized, well-crafted email campaigns. From newsletters to promotional offers, we create emails that drive engagement and conversion.",
      icon: <FaEnvelope />,
      icon_url:
        "https://react-icons.github.io/react-icons/icons/fa/fa-envelope/",
      color: "bg-yellow-100",
    },
    {
      title: "Expertise Across Channels",
      description:
        "We don't just focus on one channel – we optimize SEO, PPC, social media, and email marketing to ensure a comprehensive, integrated digital marketing strategy that maximizes your business growth.",
      icon: <FaLaptopCode />,
      icon_url:
        "https://react-icons.github.io/react-icons/icons/fa/fa-laptop-code/",
      color: "bg-indigo-100",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "We track, analyze, and optimize every campaign with advanced analytics tools. By making data-driven decisions, we help you get the best results and ensure your strategy evolves with the market.",
      icon: <FaChartLine />,
      icon_url:
        "https://react-icons.github.io/react-icons/icons/fa/fa-chart-line/",
      color: "bg-purple-100",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your business goals are at the core of our strategy. We work closely with you, providing customized digital marketing solutions that fit your unique needs and help you achieve long-term success.",
      icon: <FaHandshake />,
      icon_url:
        "https://react-icons.github.io/react-icons/icons/fa/fa-handshake/",
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
          <li>Digital Marketing</li>
        </ul>
      </div>

      <div className="w-fit">
        <Heading heading="Digital Marketing" color="bg-indigo-100" />
      </div>

      <div className=" flex flex-col lg:flex-row gap-5 items-center mt-3">
        <div className="lg:w-1/2">
          <p className="text-xl font-semibold font-poppins">
            Boost Your Business with Kuteeram Tech Solution's Digital Marketing
            Services!
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
            <strong> Kuteeram Tech Solutions</strong>, we understand that every business
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

      <h1 className="font-medium font-poppins lg:text-3xl text-xl flex justify-center items-center w-fit gap-2 my-16">
        <TbUserQuestion />
        Why Choose us for Your Digital Marketing?
      </h1>

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
            Ready to Boost Your Online Presence with Expert Digital Marketing?
          </h1>
          <h1 className="font-medium font-poppins lg:text-2xl text-xl mt-5">
            Contact us today to explore tailored digital marketing strategies
            designed to help your business grow. From SEO to social media
            management, we provide comprehensive services that drive traffic,
            increase conversions, and elevate your brand.
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

export default DigitalMarketing;
