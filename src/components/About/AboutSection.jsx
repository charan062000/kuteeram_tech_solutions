import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 class="text-gray-900 text-4xl lg:text-3xl font-bold font-poppins  lg:text-start text-center">
                About Esha Technology
              </h2>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At Esha Technology, our skilled team specializes in IT and
                digital marketing to support your business. Our IT experts
                create secure, high-performing websites and applications
                tailored to your needs, while our Marketing and Business Support
                team builds your brand’s online presence through effective
                strategies and social media management.
              </p>

              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                With Esha Technology, you gain a dedicated team committed to
                driving your business forward.
              </p>
            </div>
            <Link to="/#ourServices">
              <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span class="px-1.5 text-white text-base font-medium leading-6 flex items-center gap-1">
                  Get Started
                  <GoArrowUpRight />
                </span>
              </button>
            </Link>
          </div>
          <img
            class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
