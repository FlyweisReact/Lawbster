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
            <p className='second'>Create a profile under the guidelines of Advocate Act -1961</p>
        </div>
          </div>

          <div className='two-sec'>
            <img src={'./Images/29.png'} alt='' />

            <div>
            <p  className='first'>Appointments and Consultations</p>
            <p className='second'>Get paid appointments & consultations from the comfort of your home</p>
      
            </div>
           </div>
          </div>

          <div className='right'>
            <form>
              <input type='text' placeholder='Name :' />
              <br/>
              <input type='text' placeholder='Email Addresss :' />
              <br/>
              <input type='text' placeholder='Mobile :' />
              <br/>
              <input type='text' placeholder='Password :' />
              <br/>
              <input type='text' placeholder='Bar Council ID :' />
              <br/>
              <button>Sign Up</button>
            </form>
          </div>
        </div>



        <div className="centerHeading">
        <p style={{color : '#1D1D1D'}}>Case Manager</p>
      </div>

    </>
  )
}

export default SecondScreen