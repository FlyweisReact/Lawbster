import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Fourth from './Screens/Fourth'
import HomeScreen from './Screens/HomeScreen'
import SecondScreen from './Screens/SecondScreen'
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
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App