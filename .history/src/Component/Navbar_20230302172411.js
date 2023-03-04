/** @format */

import React from "react";
import ServiceModal from "../Modals/ServiceModal";
import CunsultationModal from "../Modals/ConsultationModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ServiceModal show={modalShow} onHide={() => setModalShow(false)} />
      <CunsultationModal show={open} onHide={() => setOpen(false)} />

      <div className="nav">
        <div className="left">
          <img src="./Images/logo.png" alt="logo"  onClick={() => navigate("/")} />
          <ul>
            <li onClick={() => setModalShow(true)}>Services</li>
            <li onClick={() => setOpen(true)}>Consultation</li>
            <li className="specialNavList" onClick={() => navigate("/second")}>
              For Lawyers
            </li>
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
