import React from 'react'
import HOC from './User/HOC'

const ThirteenScree = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };
  
  return (
    <h4 className="centerNinthHeading">Services</h4>
  )
}

export default HOC(ThirteenScree)