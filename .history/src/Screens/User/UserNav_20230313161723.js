import React from 'react'

const UserNav = () => {
  return (
    <>
      <div className='UserNav'>
        <div className='left'>
          <img src='./Images/logo.png' alt='' />
        </div>

        <div className='mid'>
          <input type='/search'  />
          <i class="fa-solid fa-filter"></i>
          <button>Set Reminder</button>
        </div>

        <div className='right'> 
        <i class="fa-solid fa-bell"></i>
        </div>
      </div>
    </>
  )
}

export default UserNav