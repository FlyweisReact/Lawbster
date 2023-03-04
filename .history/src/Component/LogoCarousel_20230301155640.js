/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LogoCarousel = () => {
  return (
    <>
      <Carousel
        dynamicHeight={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={1000}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        className="LogoCarousel"
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        centerSlidePercentage={100 / 4}
      >
        <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image1"
          className="logoImage"
        />

        <img
          src="https://www.nicepng.com/png/detail/2-22880_abstract-samsung-logo-png-oem-samsung-micro-usb.png"
          alt="Image2"
          className="logoImage"
        />

        <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image3"
          className="logoImage"
        />
        <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image3"
          className="logoImage"

        />
        <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image3"
          className="logoImage"
        />
      </Carousel>
    </>
  );
};

export default LogoCarousel;
