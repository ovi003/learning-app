import React, { useState } from "react";
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl,
  Button,
} from "reactstrap";
import first from "../../assets/img/1.jpg";
import second from "../../assets/img/2.jpg";
import third from "../../assets/img/3.jpg";

const items = [
  {
    src: first,
    title: "Start Your Journey With Us",
    subTitle: "You will get most exclusive service and 24/7 support from us",
  },
  {
    src: second,
    title: "Start Your Journey With Us",
    subTitle: "You will get most exclusive service and 24/7 support from us",
  },
  {
    src: third,
    title: "Start Your Journey With Us",
    subTitle: "You will get most exclusive service and 24/7 support from us",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      id="#home"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map((item, index) => {
        return (
          <CarouselItem
            className="vh-100 position-relative"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
          >
            <div
              className="bg-holder"
              style={{
                backgroundImage: `url(${item.src})`,
              }}
            ></div>
            <div className="text-white position-relative d-flex align-items-center justify-content-center h-100 flex-column text-center">
              <h1 className="text-white text-uppercase">{item.title}</h1>
              <p>{item.subTitle}</p>
              <div className="mt-4">
                <Button className="mr-3" color="primary">
                  Get Started
                </Button>
                <Button outline color="light">
                  Our Portfolio
                </Button>
              </div>
            </div>
          </CarouselItem>
        );
      })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Banner;
