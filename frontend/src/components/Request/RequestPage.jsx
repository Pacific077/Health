import React, { useEffect, useState } from "react";
import "./Requestpage.css";
import { ProfileApi, matchedAppointmensApi } from "../../Apis/UserApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Requestscard from "./Requestscard";
import ReactLoading from 'react-loading';
const RequestPage = () => {
  const [role, setrole] = useState("");
  const [appointemnt, setAppointments] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  //dues
  //if response.status
  //async handler
  useEffect(() => {
    const fetchData = async () => {
      const resp = await ProfileApi();
      setrole(resp.data.data.role);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setloading(true);
    const checkrole = async () => {
      console.log(role);
      if (role === "Patient") {
        toast.error("Denied Access");
        navigate("/home");
      } else {
        const Resp = await matchedAppointmensApi();
        console.log("response appi", Resp.data.matchedAppointemnts);
        if (Resp.status === 200) {
          setAppointments(Resp.data.matchedAppointemnts);
        }
      }
      setloading(false);
    };
    checkrole();
  }, [role]);
  return (
    <div className="repage">
      {role === "admin" ? (
        <h1>Pending Doctor Requests</h1>
      ) : (
        <h1>Pending Appointment Requests</h1>
      )}

      <div className="requestPage">
        {loading&&<div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="purple" height={120} width={120} /></div>}
        {appointemnt.length > 0
          ? appointemnt.map((appoint) => {
            if(appoint.status==='pending'){
              return (
                <Requestscard doctorid={appoint.UserId} appntID={appoint._id} role={role}/>
              );
            }
            })
          : "No request to show"}
      </div>
    </div>
  );
};

export default RequestPage;
