import React from 'react'
import HOC from './User/HOC'

const ThirteenScree = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <h4 className="centerNinthHeading">Services</h4>
  )
}

export default HOC(ThirteenScree)