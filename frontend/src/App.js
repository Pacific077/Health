import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandinPage from './components/Landinpage/LandingPage'
import LoginPage from './components/Login/LoginPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandinPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App