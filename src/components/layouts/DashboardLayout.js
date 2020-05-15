import React from "react";
import DashboardNavbarTop from "../navbars/DashboardNavbarTop";
import NavbarVertical from "../navbars/NavbarVertical";

function DashboardLayout({ children }) {
  return (
    <>
      <DashboardNavbarTop />
      <NavbarVertical />
      <div className="content p-4">{children}</div>
    </>
  );
}

export default DashboardLayout;
