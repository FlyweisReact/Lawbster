/** @format */

import { Modal } from "react-bootstrap";

function CallBackModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="consultationModal">
          <div className="left">
            <p className="head">How it Works?</p>
            <div class="container">
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">Tell us your legal <br />  requirements</div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">Click “Book a Consultation”</div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">
                  Choose Lawyer Experience, Time Slot, Mode of Communication
                </div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">Consult with the Lawyer</div>
              </div>
            </div>
          </div>

          <div className="right">
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
            <p className="head">Schedule a callback</p>

            
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CallBackModal;
