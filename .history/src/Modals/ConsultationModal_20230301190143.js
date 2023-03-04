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

          <div class="container">
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
            Select the issue category
              </div>
            </div>
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
              Click “Book a Consultation”
              </div>
            </div>
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
              Choose Lawyer 
Experience, Time Slot,
Mode of 
Communication
              </div>
            </div>
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </div>
            </div>
          </div>


          <div>
            <p>How it Works?</p>
            <div>
              <p>Select the issue category</p>
            </div>
            <div>
              <p>Click “Book a Consultation”</p>
            </div>
            <div>
              <p>Choose Lawyer Experience, Time Slot, Mode of Communication</p>
            </div>
            <div>
              <p>Consult with the Lawyer</p>
            </div>
          </div>

          <div>
            <i class="fa-solid fa-x"></i>
            <p>Select Category</p>

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
