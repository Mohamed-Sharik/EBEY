import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import FootCnt from "../footer/FootCnt";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <FootCnt />
    </div>
  );
};

export default Layout;
