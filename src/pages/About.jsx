import React from "react";
import Heading from "../components/Common/Heading";
import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";
import ScrollToTop from "../components/Common/ScrollToTop";
import AboutSection from "../components/About/AboutSection";
import Founder from "../components/About/Founder";
import Experts from "../components/About/Experts";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <Heading heading="About" color="bg-indigo-100" />
      <AboutSection />
      <Heading heading="Our Founder & Co Founder" color="bg-indigo-100" />

      {/* <section class="py-24 relative">
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
      </section> */}
      <Founder />
      <Heading heading="Meet Our Experets" color="bg-slate-200" />

      <Experts />
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
