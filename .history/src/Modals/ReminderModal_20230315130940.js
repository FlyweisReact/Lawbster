/** @format */

import { Modal } from "react-bootstrap";

function ReminderModal(props) {
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

export default ReminderModal;
