import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import WhyUseCard from "./WhyUseCard";
import { FaRegStar, FaChartLine, FaHandsHelping } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import Heading from "../Common/Heading";

const WhyUseSection = () => {
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
      title: "Custom Solutions",
      details:
        "We tailor our services to meet your unique business requirements, providing innovative solutions.",
      icon: <AiOutlineSolution size={36} />,
    },
    {
      title: "Modern Design",
      details:
        "Our designs are modern, fresh, and built with the latest trends to ensure a stunning user experience.",
      icon: <MdOutlineDesignServices size={36} />,
    },
    {
      title: "Web Hosting",
      details:
        "We  provide reliable, fast, and secure web hosting with high uptime and scalable options to support your website’s growth.",
      icon: <MdOutlineEventAvailable size={36} />,
    },
    {
      title: "Business Growth",
      details:
        "Our strategies help your business scale up with a focus on sustainable growth and profitability.",
      icon: <FaChartLine size={36} />,
    },
    {
      title: "Market Strategy",
      details:
        "We develop strategic marketing plans to help your brand reach its full potential in the competitive market.",
      icon: <BsShop size={36} />,
    },
    {
      title: "Affordable Excellence",
      details:
        "We offer top-quality services at affordable prices, making excellence accessible for all businesses.",
      icon: <FaRegStar size={36} />,
    },
    {
      title: "Proven Success",
      details:
        "Our proven track record of success demonstrates our commitment to delivering exceptional results.",
      icon: <FaRegCheckCircle size={36} />,
    },
    {
      title: "End-to-End Support",
      details:
        "From initial consultation to final execution, we provide complete end-to-end support for all your needs.",
      icon: <FaHandsHelping size={36} />,
    },
  ];

  return (
    <section className="px-0 mt-20 lg:px-7 ">
      <Heading heading="Why Choose Us?" color="bg-slate-200" />

      {/* Flex layout for larger screens */}
      <div className="hidden md:flex flex-wrap mt-10 items-center justify-center gap-6 ">
        {services.map((service, index) => (
          <WhyUseCard
            key={index}
            title={service.title}
            details={service.details}
            icon={service.icon}
            color={colors[index % colors.length]}
          />
        ))}
      </div>

      {/* Swiper for mobile screens only */}
      <div className="mt-10 md:hidden  w-full ">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          navigation={true}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <WhyUseCard
                title={service.title}
                details={service.details}
                icon={service.icon}
                color={colors[index % colors.length]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyUseSection;
