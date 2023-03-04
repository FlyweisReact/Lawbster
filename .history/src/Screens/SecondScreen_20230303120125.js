import React from 'react'
import Navbar from '../Component/Navbar'


const SecondScreen = () => {
  return (
    <>
        <Navbar />

        <div className='secondScreen'>
          <p>Join Advo <br /> Legal Network</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia</p>
          <div>
            <img src={'./Images/28.png'} alt='' />
            <p>Profile</p>
            <p>Create a profile under the guidelines of Advocate Act -1961</p>
          </div>
          <div>
            <img src={'./Images/29.png'} alt='' />
            <p>Appointments and Consultations</p>
            <p>Get paid appointments & consultations from the comfort of your home</p>
          </div>
        </div>
    </>
  )
}

export default SecondScreen