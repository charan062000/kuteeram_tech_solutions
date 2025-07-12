<FaWhatsapp className="text-sky-700 text-2xl hover:text-xl  " />;
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" relative z-1">
      <a href="#toTop">
        <section className="footer footer-center hover:bg-slate-300 bg-base-300 text-base-content p-4 bg-slate-200 cursor-pointer">
          <p className="font-poppins text-lg font-semibold">Scroll To Top</p>
        </section>
      </a>
      <section className="footer bg-base-200 text-base-content p-10 bg-gray-100">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/webDevelopment" className="link link-hover">
            Web Development
          </Link>
          <Link to="/webHosting" className="link link-hover">
            Web Hosting
          </Link>
          <Link to="/digitalMarketing" className="link link-hover">
            Digital Marketing
          </Link>
          <Link to="/businessConsultancy" className="link link-hover">
            Business Consultancy
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5096152457754!2d78.39883677462802!3d17.43530600142404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9113fa7c5fe9%3A0x6833c39545d94623!2sRegus!5e0!3m2!1sen!2sin!4v1752304630464!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="lg:w-96 rounded shadow-2xl -mr-40 md:w-full md:mr-0"
        ></iframe>
        
      </section>
      <section className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 bg-gray-200">
        <aside className="grid-flow-col items-center">
          <img src="kuteeramLogo.png" className="w-64" alt="" />
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <FaFacebookF className="text-gray-700 text-2xl cursor-pointer " />
            <FaInstagram className="text-gray-700 text-3xl  cursor-pointer " />
            <FaWhatsapp className="text-gray-700 text-3xl cursor-pointer " />
          </div>
        </nav>
      </section>
      <section className="footer footer-center bg-base-300 text-base-content p-4 bg-gray-300">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Kuteeram Tech Solutions
          </p>
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
