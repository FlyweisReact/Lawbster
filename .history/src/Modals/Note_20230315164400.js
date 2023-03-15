import { Modal } from "react-bootstrap";

function Note(props) {

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="NoteModal">
            
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Note;
