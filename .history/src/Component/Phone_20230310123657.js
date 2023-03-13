import React, { useState } from 'react'
import CallBackModal from '../Modals/CallBackModal'

const Phone = () => {
  const [ CallBackModalOpen , setCallBackOpen ] = useState(false)

  return (
    <CallBackModal open={CallBackModal}
    <div className="contactBtns">
    <img src="./Images/18.png" alt='' />
    <img src="./Images/19.png" alt='' />
  </div>
  )
}

export default Phone