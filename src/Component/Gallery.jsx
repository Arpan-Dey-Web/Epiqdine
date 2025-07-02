import React from "react";
import { Link } from "react-router";
import LightBoxImages from "./LightBoxImages";
import logo from "../assets/Logo.png";
const Gallery = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div className="py-5 px-10 rounded-xl shadow-xl border border-amber-500/30">
          <span className="text-2xl md:text-4xl font-extrabold text-yellow-400 tracking-wide p-4 rounded-2xl">
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
