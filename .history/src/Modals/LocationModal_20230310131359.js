/** @format */

import { Modal } from "react-bootstrap";

function LocationModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="LocationModal">
          <div>

          <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for Lawyer, Services etc."
            />
          </div>

          <p>Popular Cities</p>

          <div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
          </div>

          <hr />

          <div>
            <ul>
                <li>{'>'}Lucknow</li>
                <li>{'>'}Noida</li>
                <li>{'>'}Jaipur</li>
                <li>{'>'}Patna</li>
                <li>{'>'}Chandigarh</li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LocationModal;
