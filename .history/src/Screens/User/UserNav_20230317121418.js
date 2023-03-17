/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../Modals/FilterModal";
import RemModal from "../../Modals/RemModal";
import Offcanvas from 'react-bootstrap/Offcanvas';

const UserNav = () => {
  const [filterModal, setFilterModal] = useState(false);
  const [RemModalOpen, setRemModal] = useState(false);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate();

  return (
    <>
      <FilterModal show={filterModal} onHide={() => setFilterModal(false)} />
      <RemModal show={RemModalOpen} onHide={() => setRemModal(false)} />

      <div className="UserNav">
        <div className="left">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
          <img src="./Images/logo.png" alt="" onClick={() => navigate("/")} />   
        </div>

        <div className="mid">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="search" />
          <i
            className="fa-solid fa-filter"
            onClick={() => setFilterModal(true)}
            style={{ cursor: "pointer" }}
          ></i>
          <button onClick={() => setRemModal(true)}>Set Reminder</button>
        </div>

        <div className="right">
          <img src="./Images/98.png" alt="" />
        </div>
      </div>

      {/* OffCanvas */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserNav;
