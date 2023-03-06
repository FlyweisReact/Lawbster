import React from 'react'
import Navbar2 from '../Component/Navbar2'

const Fourth = () => {
  return (
    <>
        <Navbar2 />

        <div className='FourthScreen'>
            <div className='left'>
                <h4>Blog</h4>
                <select>
                    <option>All  Categories</option>
                </select>
            </div>
                <div className='right'>
                <i class="fa-solid fa-magnifying-glass"></i>
                    <input type='search' placeholder='Search for a blog' />
                </div>
        </div>

        <div className='FourthScreenFirst'>
            <div className='main'>
                <img src='./Images/47.png' alt='' />
                <p className='head'>How to draft, review and revoke a Power of Attorney?</p>
                <p className='desc'>Prachi Darji</p>
                <div className='two-sec'>
                    <p>13-Dec-19</p>
                    <p style={{color : '#0F2C64'}}>Property Law</p>
                </div>
            </div>
            <div className='main main2'>
                <img src='./Images/48.png' alt='' />
                <p className='head'>Process of filing Partition Suit in India</p>
                <p className='desc'>Prachi Darji</p>
                <div className='two-sec'>
                    <p>13-Dec-19</p>
                    <p style={{color : '#0F2C64'}}>Property Law</p>
                </div>
            </div>
        </div>

        <div>
            <div>
                <img src='./Images/49.png' alt='' />
                <h5>Real Estate (Regulation & Development) Act, 2016</h5>
                <p></p>
                
            </div>
        </div>



    </>
  )
}

export default Fourth