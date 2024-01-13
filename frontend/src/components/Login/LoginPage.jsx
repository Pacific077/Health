import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./LoginPage.css";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginApi } from "../../Apis/UserApi";
import axios from "axios";
import { toast } from "react-toastify";


const LoginPage = () => {
 
  const [showPass, setShowPass] = useState(false);
  const [password ,setPass] = useState("")
  const [email ,setemail] = useState("")
  const navigate  = useNavigate();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleEmailChange = (e)=>{
    setemail(e.target.value)
    console.log(email)
  }
  const handlePassChange = (e)=>{
    setPass(e.target.value)
    console.log(password)
  }
  const handleClick = async () => {
    try {
      const resp = await LoginApi({ email, password});
      if (resp.status === 200) {
        navigate('/home')
        toast.success("Logged in !!");
        setTimeout(() => {
          navigate('/home');
          window.location.reload();
        }, 1000);
        
      } 
      console.log("resp",resp);
    } catch (Er) {
      if (axios.isAxiosError(Er) && Er.response.status === 400) {
        Er.response.data.err.map((msg) => {
          toast.error(msg);
        });
      } else if(axios.isAxiosError(Er) && Er.response.status === 401){
        toast.error("Invalid Id or Password");
      }else{
        toast.error("Something went wrong")
      }
    }
  };
  return (
    <div className="loginPagebg">
      <div className="loginpage">
        <div className="loginpgleft">left</div>
        <div className="loginpgright">
          <div className="loginform">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="abx@exxmple.com" onChange={handleEmailChange}/>
            <label htmlFor="">Password</label>
            <div>
              <input type={showPass ? "text" : "password"} onChange={handlePassChange}/>
              <FontAwesomeIcon
                className="lockicon"
                icon={showPass ? faLockOpen : faLock}
                onClick={handleShowPass}
              />
            </div>
            <button className="signupbtn" onClick={handleClick}>
              Login
            </button>
            <p>Dont have an Account ?<Link to='/register'> Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
