/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../Modals/FilterModal";
import RemModal from "../../Modals/RemModal";

const UserNav = ({ hamb, setHamb }) => {
  const [filterModal, setFilterModal] = useState(false);
  const [RemModalOpen, setRemModal] = useState(false);


  const navigate = useNavigate();

  return (
    <>
      <FilterModal show={filterModal} onHide={() => setFilterModal(false)} />
      <RemModal show={RemModalOpen} onHide={() => setRemModal(false)} />

      <div className="UserNav">
        <div className="left">
          <img src="./Images/logo.png" alt="" onClick={() => navigate("/")} />
          <button onClick={() => setHamb(!hamb)}>Close</button>
          <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="text-2xl font-bold text-gray-900 hover:scale-90 cursor-pointer"
          style={{ color: "#aac0bb" }}
        />
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
    </>
  );
};

export default UserNav;