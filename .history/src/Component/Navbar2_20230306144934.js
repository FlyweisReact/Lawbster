import React from 'react'

const Navbar2 = () => {
  return (
   <>
    <div className='Navbar2'>
    <div className='left'>
        <img src={'./Images/logo2.png'} alt='' />
    </div>
    <div className='mid'>
        <ul>
            <li>Blog</li>
            <li>Support</li>
            <li>About</li>
        </ul>
    </div>

    <div>
        <button>Sign In</button>
    </div>
    </div>
   </>
    )
}

export default Navbar2