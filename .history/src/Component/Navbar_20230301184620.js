/** @format */

import React from "react";
import ServiceModal from "../Modals/ServiceModal";
import CunsultationModal from "../Modals/ConsultationModal";

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ open , setOpen ] = React.useState(false)

  return (
    <>
      <ServiceModal show={modalShow} onHide={() => setModalShow(false)} />
      <CunsultationModal show={open} onHide={() => setOpen(false)} />


      <div className="nav">
        <div className="left">
          <img src="./Images/logo.png" alt="logo" />
          <ul>
            <li onClick={() => setModalShow(true)} >Services</li>
            <li onClick={() => setModalShow(true)} >Consultation</li>
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
