import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Pages/Shared/Banner/Banner";
import Footers from "../Pages/Shared/Footers/Footers";
import NavBar from "../Pages/Shared/NavBars/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  );
};

export default Main;
