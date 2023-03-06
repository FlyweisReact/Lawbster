/** @format */

import React from "react";
import Navbar2 from "../Component/Navbar2";

const FifthScreen = () => {
  return (
    <>
      <Navbar2 />

      <div>
        <div>
          <h2>Contact Us</h2>
          <p>
            Contact us for any query regarding your legal issues. Our expert
            legal team will connect with you at the earliest.
          </p>
          <div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <p>support@advo.in</p>
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              <p>+91-88514-92215</p>
            </div>
          </div>

          <div>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <p>
              Fourth Floor, Plot No 80, Sector 44, <br />
              Gurugram, Haryana 122003
            </p>
          </div>

          <img src='./Images/'
        </div>
        <div>
          <form>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Email Address</label>
              <input type="text" />
            </div>
            <div>
              <label>Mobile Number</label>
              <input type="text" />
            </div>
            <div>
              <label>Details</label>
              <textarea />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FifthScreen;
