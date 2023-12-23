import React from "react";
import { useNavigate  } from "react-router-dom";
import UserContext from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
const UserState = ({ children }) => {
    const navigate = useNavigate()
    const GetProfile =async ()=>{
        try{
             await axios.get(
                "http://localhost:4501/api/v1/user/profile",
                {
                  withCredentials: true,
                }
              );
        }catch(error){
            if (axios.isAxiosError(error) && error.response.status === 400) {
                toast.error("Please Login Before Continue");
                navigate('/login')
              }else{
                toast.error("abcd")
              }
        }
       
    }
  return (
    <UserContext.Provider
      value={
        {GetProfile}
      }
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
