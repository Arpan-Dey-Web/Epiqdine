import React from "react";
import { Outlet } from "react-router";
import Nabbar from "../Component/Nabbar";
import Footer from "../Component/Footer";

const MainLayOut = () => {
  return (
    <>
      <Nabbar></Nabbar>
      <div className=" w-11/12 mx-auto ">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayOut;
