import React from 'react'
import { LogoutApi } from '../../Apis/UserApi'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const LogoutCard = () => {
    const navigate = useNavigate()
    const handleYesClick =async ()=>{
       try{
        const resp =  await LogoutApi();
       console.log("resp",resp);
       if(resp.status === 200){
        toast.success("Logged out !!")
        navigate('/login')
       }
    }catch(er){
        toast.error("Something went wrong")
    }
    }
    const handleNoClick = ()=>{
        navigate("/home");
    }
  return (
    <div className='LogoutCard'>
        <h2 className='logouttext'>Are you sure you want to Logout ?</h2>
        <div className='logutbtnsCont'>
            <button className='logutyesBtn' onClick={handleYesClick}>Yes</button>
            <button className='logutNoBtn' onClick={handleNoClick}>No</button>
        </div>
    </div>
  )
}

export default LogoutCard