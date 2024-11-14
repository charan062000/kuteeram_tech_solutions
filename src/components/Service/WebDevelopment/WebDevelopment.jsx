import React from "react";
import Heading from "../../Common/Heading";
import WebDevExpertCard from "./WebDevExpertCard";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaTachometerAlt,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import "../Style.css";
import { EffectCreative, Autoplay } from "swiper/modules";

const WebDevelopment = () => {
  const colors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-teal-100",
    "bg-red-100",
  ];
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Whether you need a simple landing page or a fully-featured site, we create custom solutions to reflect your brand and captivate your audience. Our team ensures that every page is tailored to meet your specific needs.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Responsive Design",
      description:
        "In today's world, your website must look and perform beautifully across all devices. We build responsive websites that adapt seamlessly to desktops, tablets, and mobile phones, providing users with a consistent and enjoyable experience.",
      icon: <FaMobileAlt />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Transform your website into a powerful sales platform. From product pages to secure checkout, we offer e-commerce solutions designed to boost your sales and improve customer engagement.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Performance & Optimization",
      description:
        "A slow website loses visitors. We optimize every website for speed, ensuring that your pages load quickly to keep your audience engaged and improve your search engine ranking.",
      icon: <FaTachometerAlt />,
    },
    {
      title: "SEO-Friendly Development",
      description:
        "We build with search engines in mind, implementing best practices for SEO so that your site can attract more visitors. From clean code to optimized content structure, we help your website get noticed.",
      icon: <FaSearch />,
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Your website is a long-term asset. We offer ongoing maintenance and support to keep your site secure, updated, and running smoothly, giving you peace of mind.",
      icon: <FaTools />,
    },
  ];
  return (
    <section>
      <div className="breadcrumbs text-sm -mt-3 mb-10 flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#ourServices">Services</Link>
          </li>
          <li>Web Development</li>
        </ul>
      </div>
      <div className="w-fit">
        <Heading heading="Web Development" color="bg-red-100" />
      </div>
      <div className="mt-10 flex flex-col lg:flex-row gap-5 items-center">
        <div className="lg:w-1/2">
          <p className="text-xl font-semibold font-poppins">
            Bring Your Ideas to Life with Professional Web Development
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
            <strong>Esha Technology</strong>, we specialize in building
            high-quality, modern websites tailored to your business goals. We
            believe that your website should do more than just look good – it
            should function flawlessly, engage visitors, and drive results.
          </p>
        </div>

        <div className=" flex justify-center  ">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            loop={true}
            autoplay={{
              delay: 700,
              disableOnInteraction: false,
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/WebsiteImg/1Web.jpg"
                alt="Professional Web Development"
                className="w-full object-cover  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/WebsiteImg/2Web.jpg"
                alt="Professional Web Development"
                className="w-full object-cover  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/WebsiteImg/3Web.jpg"
                alt="Professional Web Development"
                className="w-full object-cover  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/WebsiteImg/4Web.png"
                alt="Professional Web Development"
                className="w-full object-cover  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/WebsiteImg/5Web.jpg"
                alt="Professional Web Development"
                className="w-full object-cover  "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-medium font-poppins lg:text-2xl text-xl">
          Our Web Development Expertise Includes:
        </h1>
      </div>
      <div>
        {services.map((service, index) => (
          <WebDevExpertCard
            key={index}
            heading={service.title}
            subHeading={service.description}
            icon={service.icon}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
      <div className="mb-20">
        <div className="mt-20">
          <h1 className="font-extrabold  lg:text-3xl text-xl ">
            Ready to Build Your Ideal Website?
          </h1>
          <h1 className="font-medium font-poppins lg:text-2xl text-xl mt-5">
            Contact us today to discuss how we can bring your vision to life.
            Let’s make your website the one that stands out and delivers real
            results.
          </h1>
        </div>
        <Link to="/contact">
          <button className="btn btn-primary text-base mt-10">
            <GrContactInfo className="text-3xl" />
            Contact us to Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WebDevelopment;
