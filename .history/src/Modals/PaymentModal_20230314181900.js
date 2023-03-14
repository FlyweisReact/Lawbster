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
          <p className="head">My Payments</p>
          <i class="fa-solid fa-x"></i>

          <div>
            <p>Add Money to Wallet</p>
            <div>
              <p>Total Balance</p>
              <p>₹5,000</p>
            </div>
          </div>

          <div>
            <button>Send Bill</button>
            <button> Withdrawal </button>
          </div>

          <hr />

          <p>My Previous payments</p>

          <div>
            <div>
              <p>Added From Bank Account</p>
              <p>6 Days ago</p>
            </div>
            <p>+₹500</p>
          </div>
          <div>
            <div>
              <p>Added From Bank Account</p>
              <p>6 Days ago</p>
            </div>
            <p>+₹500</p>
          </div>
          <div>
            <div>
              <p>Added From Bank Account</p>
              <p>6 Days ago</p>
            </div>
            <p>+₹500</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentModal;
