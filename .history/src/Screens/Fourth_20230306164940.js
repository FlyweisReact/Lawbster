import React from 'react'
import Navbar2 from '../Component/Navbar2'

const Fourth = () => {
  return (
    <>
        <Navbar2 />

        <div className='FourthScreen'>
            <div>
                <h4>Blog</h4>
                <select>
                    <option>All  Categories</option>
                </select>
            </div>
                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                    <input type='search' placeholder='Search for a blog' />
                </div>
        </div>
    </>
  )
}

export default Fourth