import React from "react";
import { Link } from "react-router";
import LightBoxImages from "./LightBoxImages";

const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center py-5  my-10 rounded-2xl">
        <Link to={"/"} className="flex items-center gap-2 ml-2">
          <div className="w-10 h-10 object-center hidden md:block">
            <img src="/public/logo.png" className="rounded-full" alt="logo" />
          </div>
          <span className="text-3xl md:text-5xl font-bold">
            <span className="text-yellow-600">Epiq</span>
            <span className="text-yellow-300">Dine</span>
          </span>
        </Link>
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
