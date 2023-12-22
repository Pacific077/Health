import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandinPage from './components/Landinpage/LandingPage'
import LoginPage from './components/Login/LoginPage'
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandinPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/home' element={<Home/>} />
      
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App