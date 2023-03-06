/** @format */

import React, { useState } from "react";
import SignInModal from "../Modals/SignInModal";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SignInModal show={show} onHide={() => setShow(false)} />

      <div className="Navbar2">
        <div className="left">
          <img src={"./Images/logo2.png"} alt="" />
        </div>
        <div className="mid">
          <ul>
            <li>Blog</li>
            <li>Support</li>
            <li>About</li>
          </ul>
        </div>

        <div className="right">
          <button onClick={() => setShow(true)}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
