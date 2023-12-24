import React, { useEffect, useState } from "react";
import "./Notification.css";
import SingleNotifCard from "./SingleNotifCard";
import { GetAllNotifiactions } from "../../Apis/UserApi";
const Notfication = () => {
  const [oldNot, setOldNot] = useState([]);
  const [newNot, setnewNot] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await GetAllNotifiactions();
      setOldNot(resp.data.newNotifications);
      setnewNot(resp.data.oldnotifcation);
    };
    fetchData();
  }, []);
  return (
    <div className="notificationPage">
      <div className="notificationScreen">
        <div className="notifhead">
          <h3>
            Notifications <span className="redtext">3+</span>{" "}
          </h3>
          <p className="markallread">Mark all as read</p>
        </div>
        <div className="notifContainer">
          {oldNot.length === 0 && newNot.length === 0 ? (
            "No Notifications to show"
          ) : (
            <>
              {newNot.map((notif) => {
                return <SingleNotifCard />;
              })}
              {newNot.map((notif) => {
                return <SingleNotifCard />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notfication;
