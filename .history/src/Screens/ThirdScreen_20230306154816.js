import React from 'react'
import Navbar2 from '../Component/Navbar2'

const ThirdScreen = () => {
  return (
   <>
    <Navbar2 />


    <div className='thirdScreenBanner'>
    <div className='main'>
    <h5 className='head'>Legit Helping you with your legal hassles!</h5>
      <p className='desc'>Legit - your Litigation Management Tool is the most comprehensive & easy-to-use product in the market. </p>
      <p className='desc'> We provide features like Case Updates, Secured backups, Database for documents and so much more!</p>

      <div className='two-btn'>
        <button>Get started for free</button>
        <button>Schedule a demo</button>
      </div>
    </div>
    
    </div>


    <div className='thirdScreen'>
        <img src={'./Images/42.png'} alt='' />
      </div>

   </>
  )
}

export default ThirdScreen