import React from "react";
import ClassicHeader from "../sections/ClassicHeader";
import second from "../../assets/img/2.jpg";
import Contact from "../sections/Contact";

function PageContact() {
  return (
    <>
      <ClassicHeader image={second} title="Contact" />
      <Contact />
    </>
  );
}

export default PageContact;
