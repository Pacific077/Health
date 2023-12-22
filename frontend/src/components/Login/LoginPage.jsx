import React, { useState } from "react";
import "./LoginPage.css";
import {faLock,faLockOpen} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
const LoginPage = () => {
  const [showPass,setShowPass] =  useState(false);
  const handleShowPass =()=>{
    setShowPass(!showPass);
  }
  return (
    <div className="loginPagebg">
      <div className="loginpage">
        <div className="loginpgleft">left</div>
        <div className="loginpgright">
          <div className="loginform">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="John Doe" />
            <label htmlFor=""  >Email</label>
            <input type="text" placeholder='abx@exxmple.com'/>
            <label htmlFor="">Password</label>
            <div>

            <input type={showPass ? "text" : "password"} />
            <FontAwesomeIcon className="lockicon" icon= {showPass?faLockOpen:faLock} onClick={handleShowPass}/>
            </div>
            <button className="signupbtn">Sign Up</button>
            <p>Dont have an Account ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
