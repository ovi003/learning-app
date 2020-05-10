import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/sections/NavbarTop";
import Footer from "./components/sections/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PageAbout from "./components/pages/PageAbout";
import PagePricing from "./components/pages/PagePricing";
import PageContact from "./components/pages/PageContact";
import PageServices from "./components/pages/PageServices";
import "./helpers/icons";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={PageAbout} />
          <Route exact path="/services" component={PageServices} />
          <Route exact path="/pricing" component={PagePricing} />
          <Route exact path="/contact" component={PageContact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
