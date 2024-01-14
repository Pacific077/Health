import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import './FooterResp.css'
const Footer = () => {
  return (
    <div>
      <div className="footersec">
        <div className="foot1">
          <img src={logo} alt="" className="footerlogo" />
          <div className="footerdescCont">
            <p className="footerdesc">
              WE Care is a Health-tech SUPER APP to create an integrated
              Health Web to Digitize, Preserve records & Empower the Care
              Seeker.
            </p>
          </div>
          <di className="footerbrnds">
            <BiLogoFacebookSquare className="ftrbrnds" />
            <BiLogoLinkedinSquare className="ftrbrnds" />
            <BsInstagram className="ftrbrnd" />
            <FaXTwitter className="ftrbrnd" />
          </di>
        </div>
        <div className="foot2">
          <p className="footehead">WECARE</p>
          <p>Partner</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="foot3">
          <p className="footehead">LEGAL</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Return & Refund Policy</p>
        </div>
        <div className="foot4">
          <p className="footehead">CONTACT</p>
          <p>hello@wecare.com</p>
          <p>7420994331</p>
          <p>
            B/106-107, Parmanand, Ashok Nagar, Ambadi Rd, Vasai West,
            Maharashtra 401202
          </p>
        </div>
      </div>
      <div className="lastline">
        <p>
          © 2023. All rights reserved by{" "}
          <span className="textblue">Advance Digital Solutions.</span> Made with
          In India
        </p>
      </div>
    </div>
  );
};

export default Footer;
