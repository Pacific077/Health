import React, { useEffect, useState } from "react";
import "./Requestpage.css";
import { ProfileApi, matchedAppointmensApi } from "../../Apis/UserApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Requestscard from "./Requestscard";
const RequestPage = () => {
  const [role, setrole] = useState("");
  const [appointemnt, setAppointments] = useState([]);
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
    };
    checkrole();
  }, [role]);
  return (
    <div className="repage">
      <h1>Pending Doctor Requests</h1>

      <div className="requestPage">
        {appointemnt.length > 0
          ? appointemnt.map((appoint) => {
              return (
                <Requestscard doctorid={appoint.UserId} appntID={appoint._id} />
              );
            })
          : "No request to show"}
      </div>
    </div>
  );
};

export default RequestPage;