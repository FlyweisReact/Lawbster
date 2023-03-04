import React from 'react'
import Navbar from '../Component/Navbar'


const SecondScreen = () => {
  return (
    <>
        <Navbar />

        <div className='secondScreen'>

          <div className='left'>
          <p className='head'>Join Advo <br /> Legal Network</p>
          <p className='desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia</p>

          <div className='two-sec'>
            <img src={'./Images/28.png'} alt='' />
        <div>
        <p className='first'>Profile</p>
            <p>Create a profile under the guidelines of Advocate Act -1961</p>
        </div>
          </div>

          <div>
            <img src={'./Images/29.png'} alt='' />
            <p >Appointments and Consultations</p>
            <p>Get paid appointments & consultations from the comfort of your home</p>
          </div>
          </div>

          <div className='right'>
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