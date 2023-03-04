/** @format */

import { Modal } from "react-bootstrap";

function CunsultationModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="consultationModal">
      

          <div>
            <p>How it Works?</p>
            <div>
              <p>Select the issue category</p>
            </div>
            <div>
              <p>Click “Book a Consultation”</p>
            </div>
            <div>
              <p>Choose Lawyer Experience, Time Slot, Mode of Communication</p>
            </div>
            <div>
              <p>Consult with the Lawyer</p>
            </div>
          </div>

          <div>
            <i class="fa-solid fa-x"></i>
            <p>Select Category</p>

            <div>
              <img src={"./Images/20.png"} alt="" />
              <p>Property Possession Delay - RERA</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CunsultationModal;
