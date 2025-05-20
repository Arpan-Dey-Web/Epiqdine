import React from "react";
import { Outlet } from "react-router";
import Nabbar from "../Component/Nabbar";

const MainLayOut = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nabbar></Nabbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
