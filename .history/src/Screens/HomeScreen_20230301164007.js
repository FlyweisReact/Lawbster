/** @format */

import React, { useState } from "react";
import HomeCarousel from "../Component/HomeCarousel";
import LogoCarousel from "../Component/LogoCarousel";
import Navbar from "../Component/Navbar";
import ReviewCarousel from "../Component/ReviewCarousel";

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
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>

        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>

        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>

        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>
        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>
        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>
        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>
        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>
        <div className="main">
          <div className="first">
            <img src={"./Images/4.png"} alt="" />
            <p>Property Possession Delay - RERA</p>
          </div>

          <div className="second">
            <div className="under">
              <div className="two">
                <i class="fa-solid fa-star"></i>
                <p>4.4/5</p>
              </div>
              <p className="alone">15 reviews</p>
            </div>

            <div className="empty"></div>

            <div className="under">
              <div className="two">
                <img src={"./Images/6.png"} alt="" />
                <p>300+</p>
              </div>
              <p className="alone">Verified Lawyers</p>
            </div>
          </div>

          <hr />

          <div className="three">
            <p style={{ color: "Consultation starting from" }}>
              Consultation starting from
            </p>
            <p style={{ fontWeight: "bold" }}>₹2,000</p>
            <p style={{ color: "#0F2C64", fontWeight: "bolder" }}>
              Book Now {">"}
            </p>
          </div>
        </div>
      </div>

      <div className="HomeCenterInput">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Looking for something specific?" />
      </div>

      <div className="centerHeading">
        <p>Why users love Us</p>
      </div>

      <div className="HomeThreeSec">
      
        <div>
          <img src="./Images/8.png" alt="" />
          <p className="heading">Fixed Pricing</p>
          <p className="desc">
            Prices are fixed across various services and <br /> consultation{" "}
          </p>
        </div>

        <div>
          <img src="./Images/9.png" alt="" />
          <p className="heading">Expert Lawyers</p>
          <p className="desc">
            24x7 Expert assistance for any legal problem
          </p>
        </div>

        <div>
          <img src="./Images/10.png" alt="" />
          <p className="heading">Dedicated Support</p>
          <p className="desc">
          Case Manager assist you throughout the <br /> case lifecycle
          </p>
        </div>

      </div>

      <div className="centerHeading">
        <p>Trusted by 400+ Businesses</p>
      </div>

      <LogoCarousel />

      <ReviewCarousel />


      <div className="homeFistSec">
        <p className="head"></p>
      </div>


    </>
  );
};

export default HomeScreen;
