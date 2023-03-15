/** @format */

import { Modal } from "react-bootstrap";
import { Progress , Symbol  } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function FilterModal(props) {
    const percent = 50;

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="filterModal">


          <div className="three-sec">
            <i class="fa-solid fa-filter"></i>
            <p>Sort and Filter</p>
            <i class="fa-solid fa-x"></i>
          </div>



            <div className="Container">
                <p>Sort by experience</p>
                <div>
                    <button className="btn1">High to Low</button>
                    <button className="btn2">Low to High</button>
                </div>
            </div>

            <div  className="Container">
                <p>Sort by availability</p>
                <div>
                    <button  className="btn1">Available Now</button>
                    <button className="btn2">Schedule for Later</button>
                </div>
            </div>

            <div  className="Container">
                <p>Sort by distance</p>
                <div>
                    <button  className="btn1">Near You</button>
                    <button className="btn2">Anywhere from India</button>
                </div>
            </div>


            <div className="container2">
                <p>Select Language</p>

                <div className="main">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder="Language spaking Lawyer" />
                </div>
            </div>

            <div className="container2">
                <p>Select Specialization</p>

                <div className="main"> 
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder="Specialization" />
                </div>
            </div>

            <div className="bar">
                <p>Consultation Fee</p>
                <Progress percent={percent} 
      symbol={
        <Symbol 
          symbolClassName="progress-label" 
          percent={percent} 
          valueStart={0} 
          valueEnd={100} 
          formatValue={value => `${value}%`} 
        />
      } 
    />
            </div>


            
            <div className="container2">
                <p>Select Specialization</p>

                <div className="main">
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
