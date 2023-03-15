/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Calendar from 'react-calendar';

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
 
      <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
      </Modal.Body>
    </Modal>
  );
}

export default RemModal;
