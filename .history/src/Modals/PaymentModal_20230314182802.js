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
            <p className="head">My Payments</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>

            <div className="payment1">
              <p className='first'>Add Money to Wallet</p>
              <div>
                <p className="second">Total Balance</p>
                <p className="third">₹5,000</p>
              </div>
            </div>

            <div className="">
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
            <hr />
            <div>
              <div>
                <p>Added From Bank Account</p>
                <p>6 Days ago</p>
              </div>
              <p>+₹500</p>
            </div>

            <hr />

            <div>
              <div>
                <p>Added From Bank Account</p>
                <p>6 Days ago</p>
              </div>
              <p>+₹500</p>
            </div>

            <button>View All</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentModal;
