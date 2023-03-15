/** @format */

import { Modal } from "react-bootstrap";

function FilterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
      
        <div className="filterModal" >
            <div>
            <i class="fa-solid fa-filter"></i>
            <p>Sort and Filter</p>
            
            </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default FilterModal;
