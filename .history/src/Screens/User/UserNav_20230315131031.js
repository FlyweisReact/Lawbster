/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../Modals/FilterModal";
import ReminderModal from "../../Modals/ReminderModal";

const UserNav = () => {
  const [filterModal, setFilterModal] = useState(false);
  const [ ReminderModal , setReminder]

  const navigate = useNavigate();

  return (
    <>
      <FilterModal show={filterModal} onHide={() => setFilterModal(false)} />

      <div className="UserNav">
        <div className="left">
          <img src="./Images/logo.png" alt="" onClick={() => navigate("/")} />
        </div>

        <div className="mid">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="search" />
          <i
            class="fa-solid fa-filter"
            onClick={() => setFilterModal(true)}
            style={{ cursor: "pointer" }}
          ></i>
          <button>Set Reminder</button>
        </div>

        <div className="right">
          <img src="./Images/98.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default UserNav;
