/** @format */

import { Modal } from "react-bootstrap";

function CunsultationModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='newModal'
    >
      <Modal.Body style={{padding : '0'}}>
        <div className="consultationModal">

          <div className="left">
            <p className="head">How it Works?</p>
            <div class="container">
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">Select the issue category</div>
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
            <p className='head'>Select Category</p>

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
