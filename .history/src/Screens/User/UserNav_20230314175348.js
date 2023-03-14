import React from 'react'

const UserNav = () => {
  const nav
  return (
    <>
      <div className='UserNav'>
        <div className='left'>
          <img src='./Images/logo.png' alt='' />
        </div>

        <div className='mid'> 
        <i class="fa-solid fa-magnifying-glass"></i>
          <input type='search' placeholder='search'  />
          <i class="fa-solid fa-filter"></i>
          <button>Set Reminder</button>
        </div>

        <div className='right'> 
       <img src='./Images/98.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default UserNav