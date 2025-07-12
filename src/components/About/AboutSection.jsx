import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl lg:text-3xl font-bold font-poppins  lg:text-start text-center">
                About Kuteeram Tech Solutions
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At Kuteeram Tech Solutions, our skilled team specializes in IT
                and digital marketing to support your business. Our IT experts
                create secure, high-performing websites and applications
                tailored to your needs, while our Marketing and Business Support
                team builds your brand’s online presence through effective
                strategies and social media management.
              </p>

              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                With Kuteeram Tech Solutions, you gain a dedicated team
                committed to driving your business forward.
              </p>
            </div>
            <Link to="/#ourServices">
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-base font-medium leading-6 flex items-center gap-1">
                  Get Started
                  <GoArrowUpRight />
                </span>
              </button>
            </Link>
          </div>
          <img
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
