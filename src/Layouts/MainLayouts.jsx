import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-132px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-14 lg:px-18 xl:px-24">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayouts;
