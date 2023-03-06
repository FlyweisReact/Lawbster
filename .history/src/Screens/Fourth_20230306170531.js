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

        <div className='FourthScreen'>
            <div>
                <img src='./Images/47.png' alt='' />
                <p>How to draft, review and revoke a Power of Attorney?</p>
                <p>Prachi Darji</p>
                <div>
                    <p>13-Dec-19</p>
                    <p>Property Law</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fourth