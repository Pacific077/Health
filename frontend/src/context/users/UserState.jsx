import React from "react";

import UserContext from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
const UserState = ({ children }) => {


    const GetProfile =async ()=>{
        try{
             await axios.get(
                "/api/v1/user/profile",
                {
                  withCredentials: true,
                }
              );
        }catch(error){
            if (axios.isAxiosError(error) && error.response.status === 400) {
              console.log(error)
                // toast.error("Please Login Before Continue");
                // navigate('/login')
                // setTimeout(()=>{
                //   window.location.reload();
                // },2000)
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
