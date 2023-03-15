import { useState } from "react";
import { Modal } from "react-bootstrap";
import 'react-clock/dist/Clock.css';

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
      <div className="clockModal">
        <p className="head">Set Reminder</p>

        <div className="two-btns">
            <button>Hourly</button>
            <button>Hourly</button>
        </div>
      </div>
      <p>dsakjdhasdkbaskjbd</p>
      <div>

      </div>
      <Clock value={time} />

      </Modal.Body>
    </Modal>
  );
}

export default ClockModal;
