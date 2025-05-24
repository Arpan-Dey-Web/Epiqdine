import React, { useState } from "react";
import { Outlet } from "react-router";
import Nabbar from "../Component/Nabbar";
import Footer from "../Component/Footer";

const MainLayOut = () => {
  const [themeData ,setThemeData] = useState(false)
  return (
    <div
      className="max-w-7xl w-11/12 mx-auto "
      data-theme={`${themeData ? "dark" : "light"}`}
    >
      <Nabbar themeData={themeData} setThemeData={setThemeData}></Nabbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
