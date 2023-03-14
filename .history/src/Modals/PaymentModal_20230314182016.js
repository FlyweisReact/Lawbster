/** @format */

import { Modal } from "react-bootstrap";

function PaymentModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="sl"
        aria-labelledby="contained-modal-title-vcenter"
        className="newModal"
        centered
      >
        <Modal.Body>
        <div className="paymentModal">

        </div>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentModal;
