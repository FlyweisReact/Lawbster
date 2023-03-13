import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import EightScreen from './Screens/EightScreen'
import FifthScreen from './Screens/FifthScreen'
import Fourth from './Screens/Fourth'
import HomeScreen from './Screens/HomeScreen'
import Ninth from './Screens/Ninth'
import SecondScreen from './Screens/SecondScreen'
import SeventhScreen from './Screens/SeventhScreen'
import SixthScreen from './Screens/SixthScreen'
import TenScreen from './Screens/TenScreen'
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
        <Route path='/ninth' element={<Ninth />} />
        <Route path='/ten' element={<TenScreen />} />
        <Route path='/eleven' element={<E}
       </Routes>
    </BrowserRouter>
   </>
  )
}

export default App