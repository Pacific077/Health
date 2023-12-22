import React, { useEffect, useState } from "react";
import { faHouseUser ,faBell,faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import "./Nav.css";
import "./NavResp.css";
import logo from "../../images/logo.png";
import SideNav from "./SideNav";
const Nav = () => {
  const [isactiv1, setactiv1] = useState(true);
  const [isactiv2, setactiv2] = useState(false);
  const [isactiv3, setactiv3] = useState(false);
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
  const handleHomeclick = () => {
    setactiv1(true);
    setactiv2(false);
    setactiv3(false);
  };
  const handleApiclick = () => {
    setactiv1(false);
    setactiv2(true);
    setactiv3(false);
  };
  const handleAboutclick = () => {
    setactiv1(false);
    setactiv2(false);
    setactiv3(true);
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
            onClick={handleApiclick}
            className={isactiv2 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faBell} />
          </li>
          <li
            onClick={handleAboutclick}
            className={isactiv3 ? "activ opaczero" : "opaczero"}
          >
            <FontAwesomeIcon className="navicons" icon={faUser} />
          </li>
          <button className="navBtn">Download Now</button>
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
