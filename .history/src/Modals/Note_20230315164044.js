/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import "react-clock/dist/Clock.css";

import Clock from "react-clock";

function ClockModal(props) {
  const [time, setTime] = useState(new Date());

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
    
      </Modal.Body>
    </Modal>
  );
}

export default ClockModal;
