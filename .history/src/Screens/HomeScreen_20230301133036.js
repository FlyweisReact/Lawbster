/** @format */

import React, { useState } from "react";
import HomeCarousel from "../Component/HomeCarousel";
import Navbar from "../Component/Navbar";

const HomeScreen = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <Navbar />
      <HomeCarousel />

      <div className="home2btn">
        <button
          className={`${isOn ? "btnOn" : ""}`}
          onClick={() => handleClick()}
        >
          Legal Services
        </button>
        <button
          className={`${isOn ? "" : "btnOn"}`}
          onClick={() => handleClick()}
        >
          Government Registrations
        </button>
      </div>

      <div className="homeThreeSec">
        <div className="main">
          <div>
            <img src={"./Images/4.png"} alt="" />
            <div>
              <p>Property Possession Delay - RERA</p>
            </div>
          </div>

          <div>

            <div>
              <div>
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p>15 reviews</p>
            </div>

            <div>
              <div>
               <img src={'./Images/6.png'} alt='' />
                <p>300+</p>
              </div>
              <p>Verified Lawyers</p>
            </div>

          </div>

          <hr />

          
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
