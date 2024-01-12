import React, { useEffect, useState } from "react";
import "./Notification.css";
import SingleNotifCard from "./SingleNotifCard";
import ReactLoading from 'react-loading';
import { GetAllNotifiactions, MarkAllNotificationRead } from "../../Apis/UserApi";
const Notfication = () => {
  const [oldNot, setOldNot] = useState([]);
  const [newNot, setnewNot] = useState([]);
  const [loading, setloading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
      try {
      const resp = await GetAllNotifiactions();
      console.log("resp",resp.data.newNotifications)
      setnewNot(resp.data.newNotifications);
      setOldNot(resp.data.oldnotifcation);
      setloading(false);
      abc();
      } catch (error) {
        console.log(error)
      }
      
    };
    const abc = async ()=>{
      try {
        await MarkAllNotificationRead ();
      } catch (error) {
        console.log(error)
      }
      
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
          {loading&&<div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="#2E1F8B" height={100} width={100} /></div>}
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
