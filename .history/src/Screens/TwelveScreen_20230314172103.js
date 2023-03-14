import React from 'react'
import HOC from './User/HOC'

const TwelveScreen = () => {
  return (
    <>
        <div className='twelveFirst'>
            <div className='left'>
                <p>Saved Documents</p>
            </div>
        </div>
    </>
  )
}

export default HOC(TwelveScreen)