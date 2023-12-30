import React, { useEffect, useState } from "react";
import "./Appointment.css";
import AppointmentCard from "./AppointmentCard";
import { AllappointmentsApi } from "../../Apis/UserApi";
const AppointmentPage = () => {
  const [appoint, setAPoint] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const resp = await AllappointmentsApi();
      console.log("resp", resp.data.data);
      setAPoint(resp.data.data);
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
          {appoint.length <= 0
            ? "array empty"
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
