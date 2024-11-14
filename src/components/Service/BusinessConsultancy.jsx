import React from "react";
import Heading from "../Common/Heading";
import { Link } from "react-router-dom";

const BusinessConsultancy = () => {
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
          <li>Business Consultancy</li>
        </ul>
      </div>
      <Heading heading="Business Consultancy" color="bg-orange-100" />
    </>
  );
};

export default BusinessConsultancy;
