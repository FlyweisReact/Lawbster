import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LogoCarousel = () => {
  return (
 <>
       <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        dynamicHeight={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={1000}
        infiniteLoop={true}
        autoPlay={true}
        className="homePageCarosel"
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button
                onClick={clickHandler}
               className='carouselPrev'
               style={{ background: "transparent", border: "none" }}
              >
                {" "}
                <img
                  src="../Images/2.png"
                  alt=""
                  className='carouselPrev'
                />
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button
                onClick={clickHandler}
                style={{ background: "transparent", border: "none" }}
                className="carouselNext"
              >
                {" "}
                <img
                  src="../Images/3.png"
                  alt=""
                  className="carouselNext"
                />
              </button>
            )
          );
        }}
      >
        <img src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg" alt="Image1" className="CImage" />

        <img src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg" alt="Image2" className="CImage" />

        <img src="./Images/carousel2 (2).png" alt="Image3" className="CImage" />
        <img src="./Images/carousel2 (3).png" alt="Image3" className="CImage" />
      </Carousel>
   
 </>
  )
}

export default LogoCarousel