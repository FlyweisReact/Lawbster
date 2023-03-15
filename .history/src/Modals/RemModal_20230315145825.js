/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function RemModal(props) {

  const [date, setDate] = useState(new Date());


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
    
    <div className="RemiderModal">

    </div>
    
      </Modal.Body>
    </Modal>
  );
}

export default RemModal;
