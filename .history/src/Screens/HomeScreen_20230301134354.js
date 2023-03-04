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
        <img src={'./Images/4.png'} alt='' />
        <p></p>
       </div>
      </div>
    </>
  );
};

export default HomeScreen;
