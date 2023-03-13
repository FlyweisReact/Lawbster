/** @format */

import React from "react";
import Navbar from "../Component/Navbar";

const SeventhScreen = () => {
  return (
    <>
      <Navbar />

      <div className="seventScreen">
        <div className="left">
          <div className="upper">
            <img src="./Images/76.png" alt="" />
            <div>
              <p className="head">Property Possession Delay - RERA</p>
              <div className="three-sec">
                <p>4.4</p>
                <div>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half"></i>
                </div>
                <p>15 reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="upper">
            <p className="head">Consultation Price</p>

            <div>
              <p className="head">₹2,000</p>
              <p className="down">Excl. of taxes</p>
            </div>
          </div>

          <p className="head2">
            Pay securely with major Credit and Debit cards, online Wallets and
            UPI
          </p>

          <button>Book Consultation</button>

          <p className="head2">By booking this consultation, you agree to our T&C</p>

          <div className="twoSec">
            <img src="./Images/77.png" alt="" />
            <p>
              {" "}
              <strong style={{fontWeight : 'bold'}}> 1,200+ </strong> Cases Filed in RERA{" "}
            </p>
          </div>
          <div  className="twoSec">
            <img src="./Images/79.png" alt="" />
            <p>
              {" "}
              <strong> 1,200+ </strong> Cases Filed in RERA{" "}
            </p>
          </div>
          <div  className="twoSec">
            <img src="./Images/78.png" alt="" />
            <p>
              {" "}
              <strong> 1,200+ </strong> Cases Filed in RERA{" "}
            </p>
          </div>
          <div  className="twoSec" >
            <img src="./Images/77.png" alt="" />
            <p>
              {" "}
              <strong> 1,200+ </strong> Cases Filed in RERA{" "}
            </p>
          </div>
          <div  className="twoSec">
            <img src="./Images/80.png" alt="" />
            <p>
              {" "}
              <strong> 1,200+ </strong> Cases Filed in RERA{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhScreen;
