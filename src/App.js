import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/sections/NavbarTop";
import Banner from "./components/sections/Banner";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
