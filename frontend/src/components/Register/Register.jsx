import React, { useState } from "react";
import "./Register.css";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterApi } from "../../Apis/UserApi";
import { toast } from "react-toastify";
import axios from "axios";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [name,setname]= useState("")
  const [email,setemail]= useState("")
  const [password,setpass]= useState("")
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleNameChange = (e)=>{
    setname(e.target.value)

  }
  
  const handleEmailchange = (e)=>{
    setemail(e.target.value)

  }
  
  const handlePassChange= (e)=>{
    setpass(e.target.value)

  }
  const onRegister = async ()=>{
    try{
      const resp = await RegisterApi({name,email,password});
      if(resp.status===200){
        toast.success("user registered Successfulyy");
        toast.success("Please Login to continue");

      }
    }catch(Er){
      if (axios.isAxiosError(Er) && Er.response.status === 400) {

        Er.response.data.err.map((msg)=>{
          toast.error(msg);
        })
      }else{
        toast.error("Something went wrong")
      }
    }
  
  }
  return (
    <div className="loginPagebg">
      <div className="registerPage">
        <div className="lft"></div>
        <div className="loginpgright">
          <div className="loginform">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="John Doe" onChange={handleNameChange}/>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="abx@exxmple.com" onChange={handleEmailchange} />
            <label htmlFor="">Password</label>
            <div>
              <input type={showPass ? "text" : "password"} onChange={handlePassChange}/>
              <FontAwesomeIcon
                className="lockicon"
                icon={showPass ? faLockOpen : faLock}
                onClick={handleShowPass}
              />
            </div>
            <button className="signupbtn" onClick={onRegister}>Register</button>
            <p className="alreadySigned">
              Already have an Account ?{" "}
              <span className="LoginHere"> Login here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
