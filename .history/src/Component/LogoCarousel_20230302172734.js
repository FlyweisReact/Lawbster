/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LogoCarousel = () => {

  const carouselItemStyle = {
    margin: "0 100px", 
  };


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
      <div style={carouselItemStyle}>
      <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image1"
          className="logoImage"
        />
      </div>
      <div style={carouselItemStyle}>
      <img
          src="https://thumbs.dreamstime.com/b/golden-falcon-bird-vector-logo-design-white-background-182823944.jpg"
          alt="Image2"
          className="logoImage"
        />
      </div>
      <div style={carouselItemStyle}>
      <img
          src="https://thumbs.dreamstime.com/b/paypal-logo-white-background-vector-image-eps-72682465.jpg"
          alt="Image3"
          className="logoImage"
        />
      </div>
      <div style={carouselItemStyle}>
      <img
          src="https://www.seekpng.com/png/detail/397-3971371_tata-logo-vector-symbol-tata-logo-png.png"
          alt="Image3"
          className="logoImage"

        />
      </div>
      <div style={carouselItemStyle}>
      <img
          src="https://www.seekpng.com/png/detail/397-3971371_tata-logo-vector-symbol-tata-logo-png.png"
          alt="Image3"
          className="logoImage"

        />
      </div>
       

      

     
      
       
      </Carousel>
    </>
  );
};

export default LogoCarousel;
