import React from 'react'
import HOC from './User/HOC'

const ThirteenScree = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (

    <>
    <h4 className="centerNinthHeading">Services</h4>

<div className="home2btn">
        <button
          className={`${isOn ? "btnOn" : ""}`}
          onClick={() => handleClick()}
        >
          Legal Services
        </button>
        <button
          className={`${isOn ? "" : "btnOn"}`}
          onClick={() => handleClick()}
        >
          Government Registrations
        </button>
      </div>
    </>
    
  )
}

export default HOC(ThirteenScree)