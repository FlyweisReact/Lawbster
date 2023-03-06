/** @format */

import React from "react";
import Navbar2 from "../Component/Navbar2";

const FifthScreen = () => {
  return (
    <>
      <Navbar2 />

      <div>
        <div></div>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default FifthScreen;
