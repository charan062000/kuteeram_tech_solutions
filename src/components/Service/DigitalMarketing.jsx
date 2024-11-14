import React from "react";
import Heading from "../Common/Heading";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <>
      <div className="breadcrumbs text-sm -mt-3 mb-10 flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#ourServices">Services</Link>
          </li>
          <li>Digital Marketing</li>
        </ul>
      </div>
      <Heading heading="Digital Marketing" color="bg-indigo-100" />
    </>
  );
};

export default DigitalMarketing;
