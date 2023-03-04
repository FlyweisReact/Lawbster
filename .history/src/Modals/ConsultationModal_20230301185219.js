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
              <p>
                Choose Lawyer Experience, Time Slot, <br />
                Mode of <br />
                Communication
              </p>
            </div>
            <div>
              <p>Consult with the Lawyer</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CunsultationModal;
