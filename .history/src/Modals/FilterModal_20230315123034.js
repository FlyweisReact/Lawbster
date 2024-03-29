/** @format */

import { Modal } from "react-bootstrap";

function FilterModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="filterModal">


          <div className="">
            <i class="fa-solid fa-filter"></i>
            <p>Sort and Filter</p>
            <i class="fa-solid fa-x"></i>
          </div>



            <div>
                <p>Sort by experience</p>
                <div>
                    <button>High to Low</button>
                    <button>Low to High</button>
                </div>
            </div>

            <div>
                <p>Sort by availability</p>
                <div>
                    <button>Available Now</button>
                    <button>Schedule for Later</button>
                </div>
            </div>

            <div>
                <p>Sort by distance</p>
                <div>
                    <button>Near You</button>
                    <button>Anywhere from India</button>
                </div>
            </div>


            <div>
                <p>Select Language</p>

                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder="Language spaking Lawyer" />
                </div>
            </div>

            <div>
                <p>Select Specialization</p>

                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder="Specialization" />
                </div>
            </div>

            <div>
                <p>Consultation Fee</p>
            </div>


            
            <div>
                <p>Select Specialization</p>

                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder="Specialization" />
                </div>
            </div>

            <button>Save</button>

        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FilterModal;
