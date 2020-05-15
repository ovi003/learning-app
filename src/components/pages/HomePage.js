import React from "react";
import {
  Banner,
  About,
  Services,
  Pricing,
  Contact,
} from "../sections/sectionRoutes";

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
