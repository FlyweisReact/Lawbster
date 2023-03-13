import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import EightScreen from './Screens/EightScreen'
import FifthScreen from './Screens/FifthScreen'
import Fourth from './Screens/Fourth'
import HomeScreen from './Screens/HomeScreen'
import SecondScreen from './Screens/SecondScreen'
import SeventhScreen from './Screens/SeventhScreen'
import SixthScreen from './Screens/SixthScreen'
import ThirdScreen from './Screens/ThirdScreen'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/second' element={<SecondScreen /> } />
        <Route path='/third' element={<ThirdScreen />} />
        <Route path='/fourth' element={<Fourth />} />
        <Route path='/fifth' element={<FifthScreen />} />
        <Route path='/sixth' element={<SixthScreen />} />
        <Route path='/seven' element={<SeventhScreen />} />
        <Route path='/eight' element={<EightScreen />} />
       </Routes>
    </BrowserRouter>
   </>
  )
}

export default App