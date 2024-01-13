import React, { useEffect, useState } from "react";

import {
  faHouseUser,
  faBell,
  faUser,
  faRightFromBracket,
  faUserDoctor,
  faCalendarCheck,
  faUserPlus,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";
import "./NavResp.css";
import logo from "../../images/logo.png";
import SideNav from "./SideNav";
import { ProfileApi } from "../../Apis/UserApi";
import { toast } from "react-toastify";
import axios from "axios";
const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role,setrole] = useState("")
  const [newNotification, setNewNotification] = useState([]);
  const [isactiv1, setactiv1] = useState(true);
  const [isactiv2, setactiv2] = useState(false);
  const [isactiv3, setactiv3] = useState(false);
  const [isactiv4, setactiv4] = useState(false);
  const [isactiv5, setactiv5] = useState(false);
  const [isactiv6, setactiv6] = useState(false);
  const [isactiv7, setactiv7] = useState(false);
  const [isactiv8, setactiv8] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [sideNav, setsideNav] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await ProfileApi();
        setUser(resp.data);
        setrole(resp.data.data.role)
        setNewNotification(resp.data.data.NewNotification);
      } catch (Er) {
        if (axios.isAxiosError(Er) && Er.response.status === 400) {
          toast.error("PLease Login Before continuing");
          navigate("/login")
          setTimeout(()=>{
            window.location.reload();
          },2000)
        }else{
          toast.error("Something wnet wrong")
        }
      }
      
    };
    fetchData();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogOutClick = () => {
    setactiv4(true);
    setactiv3(false);
    setactiv2(false);
    setactiv5(false);
    setactiv7(false);
    setactiv1(false);
    setactiv6(false);
    setactiv8(false);
    navigate('/logout')
  };
  const handleHomeclick = () => {
    setactiv1(true);
    setactiv2(false);
    setactiv4(false);
    setactiv3(false);
    setactiv5(false);
    setactiv7(false);
    setactiv6(false);
    setactiv8(false);
    navigate("/home");
  };
  const handleNotificationclick = () => {
    setactiv1(false);
    setactiv2(true);
    setactiv4(false);
    setactiv3(false);
    setactiv5(false);
    setactiv6(false);
    setactiv7(false);
    setactiv8(false);
    navigate("/notifications");
  };
  const handleAboutclick = () => {
    setactiv1(false);
    setactiv2(false);
    setactiv3(true);
    setactiv4(false);
    setactiv5(false);
    setactiv7(false);
    setactiv6(false);
    setactiv8(false);
    navigate("/dashboard");
  };
  const handleDoctorCLick = () => {
    setactiv1(false);
    setactiv2(false);
    setactiv3(false);
    setactiv4(false);
    setactiv5(true);
    setactiv7(false);
    setactiv6(false);
    setactiv8(false);
    navigate("/list");
  };
  const handleCalendarClick = () => {
    setactiv1(false);
    setactiv2(false);
    setactiv3(false);
    setactiv4(false);
    setactiv5(false);
    setactiv6(true);
    setactiv7(false);
    setactiv8(false);
    navigate("/appointments");
  };
  const handleUserPlusClick = () =>{
    setactiv1(false);
    setactiv2(false);
    setactiv3(false);
    setactiv4(false);
    setactiv5(false);
    setactiv6(false);
    setactiv7(true);
    setactiv8(false);
    navigate('/request')
  }
  const handleNewsClick = ()=>{
    setactiv1(false);
    setactiv2(false);
    setactiv3(false);
    setactiv4(false);
    setactiv5(false);
    setactiv6(false);
    setactiv7(false);
    setactiv8(true);
    navigate('/news')
  }
  const handlesidenav = () => {
    setsideNav(!sideNav);
  };
  return (
    <>
      <div className={`navbar ${isScrolled ? "scroll" : ""}`}>
        <div className="logoCont">
          <img className="logo" src={logo} alt="" srcset="" />
        </div>
        <ul className="navItems">
          <li
            onClick={handleHomeclick}
            className={isactiv1 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faHouseUser} />
          </li>
          <li
            onClick={handleNewsClick}
            className={ isactiv8? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faNewspaper} />
          </li>
          {role === "admin" || role === "Doctor" ? (
            <li
              onClick={handleUserPlusClick}
              className={isactiv7 ? "activ opaczero" : "opaczero"}
            >
              <FontAwesomeIcon className="navicons" icon={faUserPlus} />
            </li>
          ) : (
            ""
          )}
          <li
            onClick={handleNotificationclick}
            className={isactiv2 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faBell} />
            <div
              className={
                newNotification.length > 0
                  ? "notificationmark"
                  : "notificationmark notifmarkvisiblity"
              }
            ></div>
          </li>
          {role!=='admin' ? <li
            onClick={handleCalendarClick}
            className={isactiv6 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faCalendarCheck} />
          </li> : ""}
         
          <li
            onClick={handleDoctorCLick}
            className={isactiv5 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faUserDoctor} />
          </li>
          <li
            onClick={handleAboutclick}
            className={isactiv3 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faUser} />
          </li>
          <li
            onClick={handleLogOutClick}
            className={isactiv4 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faRightFromBracket} />
          </li>
          <div className="hamburger" onClick={handlesidenav}>
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
        </ul>
      </div>
      {sideNav && <SideNav />}
    </>
  );
};

export default Nav;
