import React, { useEffect, useState } from "react";
import "./Notification.css";
import SingleNotifCard from "./SingleNotifCard";
import { GetAllNotifiactions, MarkAllNotificationRead } from "../../Apis/UserApi";
const Notfication = () => {
  const [oldNot, setOldNot] = useState([]);
  const [newNot, setnewNot] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await GetAllNotifiactions();
      console.log("resp",resp.data.newNotifications)
      setnewNot(resp.data.newNotifications);
      setOldNot(resp.data.oldnotifcation);
      abc();
    };
    const abc = async ()=>{
      await MarkAllNotificationRead ();
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
          {/* {
          console.log("new notifiction",newNot)
          }
          {
            console.log("oldnot",oldNot)
          } */}
          {oldNot.length === 0 && newNot.length === 0 ? (
            "No Notifications to show"
          ) : (
            <>
              {newNot.map((notif) => {
                return <SingleNotifCard key={notif._id} msg = {notif.message} id ={notif._id} newNot={1}/>;
              })}
              {oldNot.map((notif) => {
                return <SingleNotifCard key={notif._id} msg = {notif.message} id ={notif._id} newNot={0} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notfication;
