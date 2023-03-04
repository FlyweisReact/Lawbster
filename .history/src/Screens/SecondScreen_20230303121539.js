import React from 'react'
import Navbar from '../Component/Navbar'


const SecondScreen = () => {
  return (
    <>
        <Navbar />

        <div className='secondScreen'>
          <div>
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
          <div>
            <form>
              <input type='text' placeholder='Name :' />
              <input type='text' placeholder='Email Addresss :' />
              <input type='text' placeholder='Mobile :' />
              <input type='text' placeholder='Password :' />
              <input type='text' placeholder='Bar Council ID :' />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default SecondScreen