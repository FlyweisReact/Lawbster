import React from 'react'
import HOC from './User/HOC'

const Ninth = () => {
  return (
    <>

    <h4 className='centerNinthHeading'>Upcoming Consultation</h4>

    <div className='NinthFirst'>
      <div className='left'>


        <div className='two-sec'>

          <img src='./Images/90.png' alt='' />

          <div>
          <h3>Advocate. Yash</h3>
          <h4>Legal Property Lawyer</h4>
          <h5>English, Hindi, Panjabi</h5>
          <div>
            <h6>Exp: 21 yrs</h6>
            <img src='./Images/91.png' alt='' />
          </div>

        <h6>30 min. consultation</h6>

          </div>


        <div>
          <h4>consultation fee</h4>
          <h5>consultation fee ₹2000</h5>
        </div>

        </div>


      </div>

      <div className='right'></div>
    </div>

    </>
  )
}

export default HOC(Ninth)