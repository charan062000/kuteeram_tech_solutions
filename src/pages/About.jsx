import React from "react";
import Heading from "../components/Common/Heading";
import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";
import ScrollToTop from "../components/Common/ScrollToTop";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <Heading heading="About" color="bg-indigo-100" />
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 class="text-gray-900 text-4xl lg:text-6xl font-black font-poppins  lg:text-start text-center">
                  The Team of Experts
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  At Esha Technology, our skilled team specializes in IT and
                  digital marketing to support your business. Our IT experts
                  create secure, high-performing websites and applications
                  tailored to your needs, while our Marketing and Business
                  Support team builds your brand’s online presence through
                  effective strategies and social media management.
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

      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  class=" rounded-xl object-cover"
                  src="https://st.depositphotos.com/1246892/2314/i/450/depositphotos_23146016-Confident-businessman-portrait.jpg"
                  alt="about Us image"
                />
              </div>
              <img
                class="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://media.istockphoto.com/id/457550921/photo/young-businessman.jpg?s=612x612&w=0&k=20&c=GeWc_5OGjVzsiF9jggp6H-XK60Vz9D4orIAvccGQeOo="
                alt="about Us image"
              />
            </div>
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Meet Our Company
                  </h2>
                  <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    At Esha Technology, we believe in the power of collaboration
                    and mutual growth. Every project is a collective effort
                    where each team member’s contribution shapes our success.
                    Together, we don’t just build solutions; we create lasting
                    relationships and results that speak to our dedication and
                    expertise.
                  </p>
                </div>
                <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div class="flex-col justify-start items-start inline-flex">
                    <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      33+
                    </h3>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 px-10">
        <div className="mt-20">
          <h1 className="font-extrabold  lg:text-3xl text-xl ">Get in Touch</h1>
          <h1 className="font-medium font-poppins lg:text-2xl text-xl mt-5">
            Ready to start your next project or learn more about our services?
            Reach out to our team of experts today. We look forward to
            discussing how we can support your goals and make your vision a
            reality.
          </h1>
        </div>
        <Link to="/contact">
          <button className="btn btn-primary text-base mt-10">
            <GrContactInfo className="text-3xl" />
            Contact us to Get Started
          </button>
        </Link>
      </section>
    </>
  );
};

export default About;
