import React, { useState } from "react";
import "./Register.css";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterApi } from "../../Apis/UserApi";
import { toast } from "react-toastify";
import { Link  } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleEmailchange = (e) => {
    setemail(e.target.value);
  };

  const handlePassChange = (e) => {
    setpass(e.target.value);
  };
  const onRegister = async () => {
    try {
      const resp = await RegisterApi({ name, email, password });
      if (resp.status === 200) {
        toast.success("user registered Successfulyy");
        toast.success("Please Login to continue");
      }
    } catch (Er) {
      if (axios.isAxiosError(Er) && Er.response.status === 400) {
        Er.response.data.err.map((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <div className="registerPagebg">
    <div className="registerPage">
      <div className="registerpgLeft">left</div>
      <div className="registerPgRight">
        <div className="registerform">
          <label htmlFor="">Name</label>
          <input type="email" placeholder="John Doe" onChange={handleNameChange}/>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="abx@exxmple.com" onChange={handleEmailchange}/>
          <label htmlFor="">Password</label>
          <div>
            <input type={showPass ? "text" : "password"} onChange={handlePassChange}/>
            <FontAwesomeIcon
              className="lockicon"
              icon={showPass ? faLockOpen : faLock}
              onClick={handleShowPass}
            />
          </div>
          <button className="signupbtn" onClick={onRegister}>
            Register
          </button>
          <p>Already have an Account ?<Link to='/login'> Login</Link></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
