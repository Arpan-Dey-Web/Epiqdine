import React from "react";
import { Outlet } from "react-router";
import Nabbar from "../Component/Nabbar";
import Footer from "../Component/Footer";

const MainLayOut = () => {
  return (
    <div className="max-w-7xl w-11/12 mx-auto ">
      <Nabbar></Nabbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
