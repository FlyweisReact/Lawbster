/** @format */

import { Modal } from "react-bootstrap";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function RemModal(props) {

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

      const localizer = momentLocalizer(moment);

      const MyToolbar = ({ label }) => (
        <div>
          <h3>{label}</h3>
          <button>Custom Button</button>
        </div>
      );

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
    style={{ height: 500, margin: '50px' }}
    eventPropGetter={event => ({
      style: {
        backgroundColor: event.color,
        borderRadius: '5px',
        border: 'none'
      }
    })}
    components={{
      toolbar: MyToolbar
    }}
  />
      </Modal.Body>
    </Modal>
  );
}

export default RemModal;
