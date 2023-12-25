import React, {  useState } from "react";

import "./LoginPage.css";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginApi } from "../../Apis/UserApi";

import { toast } from "react-toastify";
const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleClick = async () => {
    console.log("is got clicked");
    try {
      const resp = await LoginApi({ email: "admin@123.com", password: "pass" });
      if (resp.status === 200) {
        toast.success("Logged in !!");
  
      } else {
        toast.error("sth went wrong");
      }
    } catch (error) {
      console.log("Login Err", error);
    }
  };
  return (
    <div className="loginPagebg">
      <div className="loginpage">
        <div className="loginpgleft">left</div>
        <div className="loginpgright">
          <div className="loginform">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="John Doe" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="abx@exxmple.com" />
            <label htmlFor="">Password</label>
            <div>
              <input type={showPass ? "text" : "password"} />
              <FontAwesomeIcon
                className="lockicon"
                icon={showPass ? faLockOpen : faLock}
                onClick={handleShowPass}
              />
            </div>
            <button className="signupbtn" onClick={handleClick}>
              Sign Up
            </button>
            <p>Dont have an Account ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
