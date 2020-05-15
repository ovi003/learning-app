import React from "react";

function Background(props) {
  const { className, img } = props;
  const classes = className.concat("bg-holder ");
  console.log(classes);
  return (
    <div className={classes} style={{ backgroundImage: `url(${img})` }}></div>
  );
}

export default Background;
