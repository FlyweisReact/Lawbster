import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewCarousel = () => {
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
          src="./Images/11.png"
          alt="Image1"
        />

     
      </Carousel>
    </>
  )
}

export default ReviewCarousel