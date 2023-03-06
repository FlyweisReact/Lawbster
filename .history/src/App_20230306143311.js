import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import SecondScreen from './Screens/SecondScreen'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/second' element={<SecondScreen /> } />
        <Route path='/third' 
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App