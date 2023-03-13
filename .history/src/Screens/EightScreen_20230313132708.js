import React from 'react'

const EightScreen = () => {
  return (
    <>

    <div className='eightFirst'>
        <img src='./Images/logo2.png'  alt=''/>
        <i class="fa-solid fa-x"></i>
    </div>

    <div className='eightSecond'>
        <button>Your Order Summary</button>
    </div>

    <div className='eightThird'>
        <div className='left'>
            <p className='head'>Order Details</p>
            <form>
                <div className='inputGroup'>
                    <p>Email</p>
                    <input type='text' />
                </div>
                <div className='inputGroup'>
                    <p>Name</p>
                    <input type='text' />
                </div>
                <div className='inputGroup'>
                    <p>Mobile Number</p>
                    <input type='text' />
                </div>
                <div className='inputGroup'>
                    <p>State</p>
                    <input type='text' />
                </div>
                <div className='inputGroup'>
                    <p>Consultation Date</p>
                    <input type='text' />
                </div>
            </form>
        </div>

        <div className='right'>
            <p></p>
        </div>
    </div>

    </>
  )
}

export default EightScreen