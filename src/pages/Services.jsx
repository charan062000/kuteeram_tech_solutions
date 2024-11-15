import React from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { FcServices } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineWbCloudy } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { TbTie } from "react-icons/tb";
import WebDevelopment from "../components/Service/WebDevelopment/WebDevelopment";
import WebHosting from "../components/Service/WebHosting/WebHosting";
import DigitalMarketing from "../components/Service/DigitalMarketing/DigitalMarketing";
import BusinessConsultancy from "../components/Service/BusinessConsultancy";
import ScrollToTop from "../components/Common/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";

function Services() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-96 max-h-fit">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "linear" }}
          id="default-sidebar"
          className="fixed ml-2 top-20 rounded-2xl overflow-hidden left-0 w-64 h-fit transition-transform -translate-x-full sm:translate-x-0 z-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-sky-50">
            <ul className="space-y-2 font-medium flex flex-wrap gap-2">
              <li className="text-base flex items-center gap-1">
                <FcServices /> Our Services
              </li>

              <NavLink
                to="web-development"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-gray-900 rounded-lg bg-sky-200 group" // Highlighted when active
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-100 group"
                }
              >
                <CgWebsite className="w-5 h-5 transition duration-75 text-gray-900" />
                <span className="ms-3">Web Development</span>
              </NavLink>

              <NavLink
                to="web-hosting"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-gray-900 rounded-lg bg-sky-200 group" // Highlighted when active
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-100 group"
                }
              >
                <MdOutlineWbCloudy className="w-5 h-5 transition duration-75 text-gray-900" />
                <span className="ms-3">Web Hosting</span>
              </NavLink>

              <NavLink
                to="digital-marketing"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-gray-900 rounded-lg bg-sky-200 group" // Highlighted when active
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-100 group"
                }
              >
                <GrAnnounce className="w-5 h-5 transition duration-75 text-gray-900" />
                <span className="ms-3">Digital Marketing</span>
              </NavLink>

              <NavLink
                to="business-consultancy"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-gray-900 rounded-lg bg-sky-200 group" // Highlighted when active
                    : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-sky-100 group"
                }
              >
                <TbTie className="w-5 h-5 transition duration-75 text-gray-900" />
                <span className="ms-3">Business Consultancy</span>
              </NavLink>
            </ul>
          </div>
        </motion.aside>

        {/* Main content area for the selected service */}
        <div className="p-4 sm:ml-64">
          <div className="p-5">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* Default message when no service is selected */}
                <Route
                  index
                  element={
                    <motion.div
                      initial={{ y: 800 }}
                      animate={{ y: 0 }}
                      exit={{ y: 800 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3>Please select a service from the list</h3>
                    </motion.div>
                  }
                />
                {/* Nested routes for each service component */}
                <Route
                  path="web-development"
                  element={
                    <motion.div
                      initial={{ y: 800 }}
                      animate={{ y: 0 }}
                      exit={{ y: 800 }}
                      transition={{ duration: 0.2 }}
                    >
                      <WebDevelopment />
                    </motion.div>
                  }
                />
                <Route
                  path="web-hosting"
                  element={
                    <motion.div
                      initial={{ y: 800 }}
                      animate={{ y: 0 }}
                      exit={{ y: 800 }}
                      transition={{ duration: 0.2 }}
                    >
                      <WebHosting />
                    </motion.div>
                  }
                />
                <Route
                  path="digital-marketing"
                  element={
                    <motion.div
                      initial={{ y: 800 }}
                      animate={{ y: 0 }}
                      exit={{ y: 800 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DigitalMarketing />
                    </motion.div>
                  }
                />
                <Route
                  path="business-consultancy"
                  element={
                    <motion.div
                      initial={{ y: 800 }}
                      animate={{ y: 0 }}
                      exit={{ y: 800 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BusinessConsultancy />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
