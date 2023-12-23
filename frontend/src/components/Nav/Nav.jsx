import React, { useEffect, useState } from "react";
import {
  faHouseUser,
  faBell,
  faUser,
  faRightFromBracket,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";
import "./NavResp.css";
import logo from "../../images/logo.png";
import SideNav from "./SideNav";
const Nav = () => {
  const navigate = useNavigate();
  const [isactiv1, setactiv1] = useState(true);
  const [isactiv2, setactiv2] = useState(false);
  const [isactiv3, setactiv3] = useState(false);
  const [isactiv4, setactiv4] = useState(false);
  const [isactiv5, setactiv5] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [sideNav, setsideNav] = useState(false);
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
  const handleLogOutClick = ()=>{
    setactiv4(true)
    setactiv3(false)
    setactiv2(false)
    setactiv5(false);
    setactiv1(false)
  }
  const handleHomeclick = () => {
    setactiv1(true);
    setactiv2(false);
    setactiv4(false);
    setactiv3(false);
    setactiv5(false);
    navigate('/home');
  };
  const handleNotificationclick = () => {
    setactiv1(false);
    setactiv2(true);
    setactiv4(false);
    setactiv3(false);
    setactiv5(false);
    navigate("/notifications");
  };
  const handleAboutclick = () => {

    setactiv1(false);
    setactiv2(false);
    setactiv3(true);
    setactiv4(false);
    setactiv5(false);

  };
  const handleDoctorCLick = () => {

    setactiv1(false);
    setactiv2(false);
    setactiv3(false);
    setactiv4(false);
    setactiv5(true);
    navigate('/list')

  };
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
            onClick={handleNotificationclick}
            className={isactiv2 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faBell} />
          </li>
          <li onClick={handleDoctorCLick}
            className={isactiv5 ? "activ opaczero" : "opaczero"}>
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
