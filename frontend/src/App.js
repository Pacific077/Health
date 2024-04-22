import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LandinPage from "./components/Landinpage/LandingPage";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home/Home";
import Notification from "./components/Notifications Page/Notification";
import Nav from "./components/Nav/Nav";
import Introduction from "./components/Disease Predict/Introduction";
import DoctorsList from "./components/DoctorList/DoctorsList";
import UserState from "./context/users/UserState";
import AppointmentPage from "./components/Appointments/AppointmentPage";
import ApplyDoctor from "./components/ApplyDoctor/ApplyDoctor";
import Dashboard from "./components/Dashboard/Dashboard";
import RequestPage from "./components/Request/RequestPage";
import Register from "./components/Register/Register";
import NotAvailablePage from "./components/NotAvailable/NotAvailable";
import Symptoms from "./components/Disease Predict/Symptoms/Symptoms";
import Logout from "./components/Logout/Logout";
import News from "./components/news/News";
import Topics from "./components/topics/Topics";
import TopicInfo from "./components/topicInfo/TopicInfo";





const App = () => {

  const pathsWithoutNav = ["/login", "/","/register"];

  const shouldDisplayNav = () => {
      return !pathsWithoutNav.includes(window.location.pathname);
    };


  return (
    <>
      <BrowserRouter> 
          <UserState>
        { shouldDisplayNav() && <Nav />}
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/list/:dieseaseName" element={<DoctorsList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<ApplyDoctor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/news" element={<News />} />
          <Route path="/awareness" element={<Topics />} />
          <Route path="/topicInfo" element={<TopicInfo />} />

          <Route path="*" element={<NotAvailablePage />} />
        </Routes>
          </UserState>

      </BrowserRouter>
    </>
  );
};

export default App;
