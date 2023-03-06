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
