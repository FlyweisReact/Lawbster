/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";

function RegisterModal(props) {

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
              <button >Login</button>
              <button className="btn1">Sign Up</button>
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
                <input
                  type="email"
                  placeholder="Email"
                  style={{ paddingLeft: "65px" }}
                />
              </div>

              <div>
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{ paddingLeft: "65px" }}
                />
              </div>
              <div>
                <i class="fa-solid fa-phone"></i>
                <input
                  type="password"
                  placeholder="Phone Number"
                  style={{ paddingLeft: "65px" }}
                />
              </div>
              <div>
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  style={{ paddingLeft: "65px" }}
                />
              </div>
              <button className="login">Sign Up</button>
              <p style={{ marginTop: "10px" }}>Forgot Password</p>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;
