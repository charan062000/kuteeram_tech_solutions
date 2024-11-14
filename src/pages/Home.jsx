import React from "react";
import HeroSection from "../components/Home/HeroSection";
import OurServices from "../components/Home/OurServices";
import CustomerReview from "../components/Home/CustomerReview";
import ContactSection from "../components/Home/ContactSection ";
import WhyUseSection from "../components/Home/WhyUseSection";
import ScrollToTop from "../components/Common/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <OurServices />
      <WhyUseSection />
      <CustomerReview />
      <ContactSection />
    </>
  );
};

export default Home;
