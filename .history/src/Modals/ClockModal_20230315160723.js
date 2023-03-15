
import { Modal } from "react-bootstrap";

function RemModal(props) {
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

export default RemModal;
