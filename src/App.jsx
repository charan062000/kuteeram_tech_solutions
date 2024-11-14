import React, { useState, useEffect } from "react";
import Navbar from "./components/Common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Common/Footer";
import Services from "./pages/Services";
import FixedIcon from "./components/Common/FixedIcon";

function App() {
  return (
    <div className="max-w-[1700px] mx-auto" id="toTop">
      <Router>
        <Navbar />
        <FixedIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/*" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
