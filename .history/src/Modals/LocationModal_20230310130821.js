/** @format */

import { Modal } from "react-bootstrap";

function LocationModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="LocationModal">
          <div>
          
            <input
              type="search"
              placeholder="Search for Lawyer, Services etc."
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LocationModal;
