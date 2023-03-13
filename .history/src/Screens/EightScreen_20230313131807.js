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
            <p>Order Details</p>
            <form>
                <div>
                    <p>Email</p>
                    <input type='text' />
                </div>
                <div>
                    <p>Name</p>
                    <input type='text' />
                </div>
                <div>
                    <p>Mobile Number</p>
                    <input type='text' />
                </div>
                <div>
                    <p>State</p>
                    <input type='text' />
                </div>
                <div>
                    <p>Consultation Date</p>
                    <input type='text' />
                </div>
            </form>
        </div>

        <div className='right'>
            
        </div>
    </div>

    </>
  )
}

export default EightScreen