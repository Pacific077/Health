import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandinPage from './components/Landinpage/LandingPage'
import LoginPage from './components/Login/LoginPage'
import Home from './components/Home/Home';
import Notification from './components/Notifications Page/Notification';
import Nav from './components/Nav/Nav';
import Introduction from './components/Disease Predict/Introduction';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<LandinPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/notifications' element={<Notification/>} />
      <Route path='/intro' element={<Introduction/>} />
      
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App