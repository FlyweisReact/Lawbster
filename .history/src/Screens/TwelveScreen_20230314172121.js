import React from 'react'
import HOC from './User/HOC'

const TwelveScreen = () => {
  return (
    <>
        <div className='twelveFirst'>
            <div className='left'>
                <p>Saved Documents</p>

                <div className='two-sec'>
                <p>Case name:45623afasfs</p>
                

                </div>
            </div>
        </div>
    </>
  )
}

export default HOC(TwelveScreen)