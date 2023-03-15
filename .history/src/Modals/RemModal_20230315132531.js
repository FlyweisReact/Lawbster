/** @format */

import { Modal } from "react-bootstrap";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function RemModal(props) {

    const localizer = momentLocalizer(moment);

    Sure, here is an example code for using React Big Calendar library:

First, you need to install the React Big Calendar library using npm or yarn:

Copy code
npm install react-big-calendar
Then, import the necessary components and CSS styles in your React component:

jsx
Copy code
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
Next, create an array of events with a start and end time:

jsx
Copy code
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
       
      </Modal.Body>
    </Modal>
  );
}

export default RemModal;
