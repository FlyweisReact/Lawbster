/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ClockModal from './ClockModal'

function RemModal(props) {
  const [date, setDate] = useState(new Date());
  const [ clockModal , setClockModal ] = useState(false)

  const [on, setOn] = useState(true);
  const onChange = (date) => {
    setDate(date);
  };

  const handleClick = () => {
    setOn(!on);
  };

  return (
    <>

    </>
   
  );
}

export default RemModal;
