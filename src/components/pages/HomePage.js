import React from "react";
import Banner from "../sections/Banner";
import About from "../sections/About";
import Services from "../sections/Services";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
}

export default HomePage;
