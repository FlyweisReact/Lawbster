import { useState } from "react";
import { Modal } from "react-bootstrap";

import Clock from 'react-clock';

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
      <p>dsakjdhasdkbaskjbd</p>
      <Clock value={time} />

      </Modal.Body>
    </Modal>
  );
}

export default ClockModal;
