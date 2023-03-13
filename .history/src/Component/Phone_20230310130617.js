/** @format */

import React, { useState } from "react";
import CallBackModal from "../Modals/CallBackModal";
import LocationModal from "../Modals/LocationModal";

const Phone = () => {
  const [CallBackModalOpen, setCallBackOpen] = useState(false);

  return (
    <>
      <CallBackModal
        show={CallBackModalOpen}
        onHide={() => setCallBackOpen(false)}
      />
      <div className="contactBtns">
        <img
          src="./Images/18.png"
          alt=""
          onClick={() => setCallBackOpen(true)}
        />
        <img src="./Images/19.png" alt="" />
      </div>
    </>
  );
};

export default Phone;
