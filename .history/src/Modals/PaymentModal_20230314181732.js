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

            <p className="head">
            My Payments
            </p> 
            <i class="fa-solid fa-x"></i>

            <div>
                <p>Add Money to Wallet</p>
                <div>
                    <p>Total Balance</p>
                    <p></p>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentModal;
