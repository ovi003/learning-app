import React from "react";
import { Banner, About, Services, Pricing, Contact } from "./pagesRoutes";

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
