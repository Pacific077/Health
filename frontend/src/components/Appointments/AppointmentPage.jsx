import React, { useEffect, useState } from "react";
import "./Appointment.css";
import AppointmentCard from "./AppointmentCard";
import { AllappointmentsApi } from "../../Apis/UserApi";
import ReactLoading from 'react-loading';
const AppointmentPage = () => {
  const [appoint, setAPoint] = useState([]);
  const [loading ,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchdata = async () => {
      const resp = await AllappointmentsApi();
      console.log("resp", resp.data.data);
      setAPoint(resp.data.data);
      setLoading(false);
    };
    fetchdata();
  }, []);
  return (
    <div className="appointmentPage">
      <div className="notificationScreen">
        <div className="notifhead">
          <h3>
            Appointments <span className="redtext">3+</span>{" "}
          </h3>
          <p>Mark all as read</p>
        </div>
        <div className="appointmentcont">
          {loading&&<div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="#2E1F8B" height={100} width={100} /></div>}
          {appoint.length <= 0
            ? "please wait"
            : appoint.map((app) => {
                console.log("naem", app.DoctorId.name);
                return (
                  <AppointmentCard
                    drname={app.DoctorId.name}
                    date={app.date}
                    time={app.time}
                    status={app.status}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
