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
        <div className='upper'>
        <p className='head'>Your Order Summary</p>
            <hr />

            <p className='head2'>Payment Details</p>
            <div className='main'>
                <div className='two-Sec'>
                    <p>Booking Charges</p>
                    <p>₹2,000</p>
                </div>
                <input type='text' placeholder='Enter promo code here' />
            </div>
            <div className='main'>
                <div className='two-Sec'>
                    <p>IGST (18%)</p>
                    <p>₹360</p>
                </div>
            </div>

            <hr />

            <div className='main'>
                <div className='two-Sec'>
                    <p style={{color : 'black'}}>TOTAL PAYABLE AMOUNT</p>
                    <p style={{color : 'black'}}>₹2,360</p>
                </div>
            </div>

            <p className='desc'>You will be redirected to secure PayU payment page</p>
            <button>Pay Now</button>

        </div>

        <img src='./Images/92.png' alt='' style={{marginTop : '20px'}} />
        <div className='down'>
            <div>
                <img src='./Images/93.png' alt='' />
                <p>Advo Assurance</p>
            </div>
        </div>
           
        </div>
    </div>

    </>
  )
}

export default EightScreen