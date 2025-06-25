import React from "react";
import { Link } from "react-router";
import LightBoxImages from "./LightBoxImages";
import logo from "../assets/Logo.png";
const Gallery = () => {
  return (
    <div>
      <div className=" flex items-center justify-center ">
        <div
          className="py-5 px-10 rounded-xl 
        bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
        shadow-xl"
        >
          <span className="text-2xl md:text-4xl font-extrabold text-white tracking-wide">
          Gallery
          </span>
        </div>
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
