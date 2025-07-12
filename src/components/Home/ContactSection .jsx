import {
  FaFacebookF,
  FaInstagram,
  FaSpinner,
  FaWhatsapp,
  FaAngleDown,
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import Heading from "../Common/Heading";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaCircleCheck, FaPeopleGroup } from "react-icons/fa6";
import { BiSolidMessageSquareError } from "react-icons/bi";

const ContactSection = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(""); // To store error message
  const [successMessage, setSuccessMessage] = useState(""); // To store success message
  const [loading, setLoading] = useState(false); // Loading state
  const [afterAppoinment, setAfterAppoinment] = useState(false);

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const formElements = form.current.elements;
    let allFieldsFilled = true;
    for (let element of formElements) {
      if (element.type !== "submit" && !element.value) {
        allFieldsFilled = false;
        break;
      }
    }

    if (!allFieldsFilled) {
      setErrorMessage("Please fill in all the fields before submitting.");
      setSuccessMessage(""); // Clear success message
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return; // Stop submission if any field is empty
    }

    // Begin loading
    setLoading(true);
    setErrorMessage(""); // Clear previous error messages
    setSuccessMessage(""); // Clear previous success messages

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_dvxzj08", // Replace with your EmailJS Service ID
        "template_oip7xrt", // Replace with your EmailJS Template ID
        form.current,
        "m3mS1IfbCGpWt3zQ7" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMessage("Our Team Contact You Soon!"); // Set success message
          setErrorMessage(""); // Clear any error message
          form.current.reset(); // Reset form after successful submission
          setAfterAppoinment(true);

          setTimeout(() => {
            setSuccessMessage(""); // Set success message
          }, 5000);
        },
        (error) => {
          console.error("Error sending message: ", error.text);
          setErrorMessage("Something went wrong, please try again.");
          setSuccessMessage(""); // Clear success message
        }
      );
  };

  return (
    <>
      <Heading heading="Contact Us" color="bg-red-100" />

      <div className="grid sm:grid-cols-2 items-start gap-16 px-10  mx-auto my-20  bg-white font-poppins mt-20">
        <div>
          <h1 className="text-gray-800 text-3xl font-bold">Let`s Talk</h1>
          <p className="text-xl text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            we`d love to hear about your project and provide help.
          </p>

          <div className="flex flex-wrap gap-x-16">
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center ">
                    <HiOutlineMailOpen className="text-indigo-700 text-2xl " />
                  </div>
                  <a
                    href="mailto:kuteeramtechsolutions@gmail.com"
                    className="text-sky-600 text-sm ml-4"
                  >
                    <small className="block">Mail</small>
                    <p className="text-base -mt-2">
                      Kuteeramtechsolutions@gmail.com
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Mobile</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center ">
                    <HiOutlineMailOpen className="text-indigo-700 text-2xl " />
                  </div>
                  <a
                    href="tel:8523811173"
                    className="text-sky-600 text-sm ml-4"
                  >
                    <small className="block">Call</small>
                    <p className="text-base -mt-2">+91 93816 87401</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>

              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0  cursor-pointer">
                  <FaFacebookF className="text-indigo-700 text-2xl hover:text-xl cursor-pointer " />
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer">
                  <FaInstagram className="text-indigo-700 text-2xl hover:text-xl  " />
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer">
                  <FaWhatsapp className="text-indigo-700 text-2xl hover:text-xl  " />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {afterAppoinment ? (
            <div className="max-w-md mx-auto m-8 p-4 bg-sky-100 border-l-4 border-sky-500 text-sky-700 rounded-lg shadow-lg">
              <p className="flex justify-center items-center gap-2">
                <FaPeopleGroup size={50} />
                Our team will contact you soon.
              </p>
            </div>
          ) : (
            ""
          )}
          {/* Success message popups */}
          {errorMessage && (
            <motion.p
              className="fixed flex justify-center items-center gap-3 bottom-4 left-4 p-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg z-40 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BiSolidMessageSquareError size={30} />
              {errorMessage}
            </motion.p>
          )}
          {/* Error message popups */}

          {successMessage && (
            <motion.p
              className="fixed flex justify-center items-center gap-2 bottom-4 left-4 p-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg text-xl z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FaCircleCheck size={30} />

              {successMessage}
            </motion.p>
          )}

          <form ref={form} onSubmit={sendEmail}>
            {/* Name Input */}
            <input
              type="text"
              name="name"
              className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
              placeholder="Name"
            />

            {/* Phone Input */}
            <input
              type="number"
              name="phone"
              className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
              placeholder="Phone Number"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
              placeholder="Email"
            />

            {/* Service Dropdown */}
            <div className="mb-8 relative cursor-pointer">
              <select
                id="services"
                name="services"
                className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 appearance-none cursor-pointer"
              >
                <option value="" disabled selected>
                  Select a Service
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Web Hosting">Web Hosting</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Business Consultancy">
                  Business Consultancy
                </option>
              </select>
              <FaAngleDown className="absolute right-5 top-1/3" />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              className="w-full h-32 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none py-2 px-4 mb-8 resize-none"
              placeholder="Your Message"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800 relative"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <FaSpinner className="animate-spin text-white" /> Sending
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
