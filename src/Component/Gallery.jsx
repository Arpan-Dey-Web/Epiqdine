import React from "react";
import { Link } from "react-router";
import LightBoxImages from "./LightBoxImages";
import logo from "../assets/Logo.png";
const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center py-5 my-10 border-b-2 w-2xs mx-auto border-gray-500">
        <span className="text-2xl md:text-3xl font-bold"> Gallery </span>
      </div>

      {/* lightbox images will place here*/}
      <div>
        {/* light box component will place here */}
        <LightBoxImages />
      </div>
    </div>
  );
};

export default Gallery;
