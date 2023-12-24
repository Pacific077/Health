import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandinPage from "./components/Landinpage/LandingPage";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home/Home";
import Notification from "./components/Notifications Page/Notification";
import Nav from "./components/Nav/Nav";
import Introduction from "./components/Disease Predict/Introduction";
import DoctorsList from "./components/DoctorList/DoctorsList";
import UserState from "./context/users/UserState";
import AppointmentPage from "./components/Appointments/AppointmentPage";



const App = () => {
  const pathsWithoutNav = ["/login", "/"];
  const shouldDisplayNav = () => {
    return !pathsWithoutNav.includes(window.location.pathname);
  };
  return (
    <>
      <BrowserRouter> 
        { shouldDisplayNav() && <Nav />}
          <UserState>
        <Routes>

          <Route path="/" element={<LandinPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/list" element={<DoctorsList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/intro" element={<Introduction />} />
        </Routes>
          </UserState>

      </BrowserRouter>
    </>
  );
};

export default App;
