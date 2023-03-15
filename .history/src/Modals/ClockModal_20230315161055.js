import { Modal } from "react-bootstrap";
import Clock from 'react-clock';

function ClockModal(props) {
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
