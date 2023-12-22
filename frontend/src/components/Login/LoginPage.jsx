import React from "react";
import "./LoginPage.css";
const LoginPage = () => {
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
            <input type="text" />
            <button className="signupbtn">Sign Up</button>
            <p>Dont have an Account ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
