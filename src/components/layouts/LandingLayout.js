import React, { Children } from "react";
import NavbarTop from "../sections/NavbarTop";
import Footer from "../sections/Footer";

function LandingLayout({ children }) {
  return (
    <>
      <NavbarTop />
      {children}
      <Footer />
    </>
  );
}

export default LandingLayout;
