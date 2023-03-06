/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";

function SignInModal(props) {
  const [second, setSecond] = useState(false);

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
          {second ? (
            <>
              <div className="SignInModal">
                <div className="twoBtn">
                  <button  onClick={() => setSecond(false)}>Login</button>
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
                  <div style={{display : 'flex' , gap : '10px'}}> 
                    <input type='checkbox' style={{width : '20px' , height : '10px' , marginTop : '0'}} />
                    <p >
                      I agree with all <span style={{color : 'red'}}>terms & condition</span>
                    </p>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="SignInModal">
                <div className="twoBtn">
                  <button className="btn1">Login</button>
                  <button onClick={() => setSecond(true)}>Sign Up</button>
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
                    <i class="fa-solid fa-lock"></i>
                    <input
                      type="password"
                      placeholder="********"
                      style={{ paddingLeft: "65px" }}
                    />
                  </div>
                  <button className="login">LOG IN</button>
                  <p style={{ marginTop: "10px" }}>Forgot Password</p>
                </form>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
