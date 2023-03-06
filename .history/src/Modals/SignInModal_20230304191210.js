/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import SignUpModal from "./SignUpModal";

function SignInModal(props) {
  const [isOn, setIsOn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
        <div className="SignInModal">
          <div className="twoBtn">
            <button
              className={`${isOn ? "btn1" : ""}`}
              onClick={() => handleClick()}
            >
              Login
            </button>
            <button
              className={`${isOn ? "" : "btn1"}`}
              onClick={() => {
                handleOpenModal()
              }}
            >
              Sign Up
            </button>
          </div>

          <form>
            <div>
              <input type="text" placeholder="Customer" />
            </div>
            <br />


            <div className="icons">
              <div>
                <img src="../Images/40.png" alt="" />
                <p>Google</p>
              </div>
              <div>
                <img src="../Images/41.png" alt="" />
                <p>Google</p>
              </div>
            </div>

            <div>
              <i class="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" style={{paddingLeft : '65px'}} />
            </div>

            <div>
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="********" style={{paddingLeft : '65px'}} />
            </div>
            <button className="login">LOG IN</button>
            <p style={{marginTop : '10px'}}>Forgot Password</p>
          </form>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default SignInModal;
