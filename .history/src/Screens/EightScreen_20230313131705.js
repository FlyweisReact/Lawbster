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
            </form>
        </div>
    </div>

    </>
  )
}

export default EightScreen