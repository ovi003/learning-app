import React from "react";
import first from "../../assets/img/1.jpg";

function ClassicHeader(props) {
  const { image, title } = Object.assign({ image: first }, props);
  return (
    <section className="text-center header-classic ">
      <div
        className="bg-holder"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container">
        <h1 className="text-white position-relative">{title}</h1>
      </div>
    </section>
  );
}

export default ClassicHeader;
