/** @format */

import { Modal } from "react-bootstrap";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function RemModal(props) {

    const localizer = momentLocalizer(moment);

    const events = [
        {
          start: new Date('2023-03-17T10:00:00'),
          end: new Date('2023-03-17T12:00:00'),
          title: 'Meeting'
        },
        {
          start: new Date('2023-03-19T14:00:00'),
          end: new Date('2023-03-19T16:00:00'),
          title: 'Conference'
        }
      ];

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
      <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
    dayPropGetter={(date) => {
      return {
        style: {
            border: 'none',
          borderBottom: 'none' , 
          border 
        }
      }}
      }
  />
      </Modal.Body>
    </Modal>
  );
}

export default RemModal;
