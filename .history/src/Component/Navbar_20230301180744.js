/** @format */

import React from "react";
import ServiceModal from "../Modals/ServiceModal";

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <ServiceModal show={modalShow} onHide={() => setModalShow(false)} />


      <div className="nav">
        <div className="left">
          <img src="./Images/logo.png" alt="logo" />
          <ul>
            <li>Services</li>
            <li>Consultation</li>
            <li style={{ minWidth: "120px" }}>For Lawyers</li>
            <li>Businesses</li>
          </ul>

          <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for Lawyer, Services etc."
            />
          </div>
        </div>

        <div className="right">
          <button>Sign In</button>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
