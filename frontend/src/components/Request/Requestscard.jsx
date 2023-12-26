import React from "react";
import img from "../../images/dp.jpg";
import { AcceptDrReqApi, RejectDrReqApi } from "../../Apis/AdminApis";
import { toast } from "react-toastify";

const Requestscard = ({ doctorid, appntID, role }) => {
  const handleAccpetClick = async () => {
    console.log("i got clicked");
    // console.log(appntID,doctorid);
    const resp = await AcceptDrReqApi({ appointID: appntID, userId: doctorid });
    console.log("status", resp.status);
    toast.success("Doctor Request Accpeted");
  };
  const handleDrRejectClick = async () => {
    console.log("i got Clicked");
    const resp = await RejectDrReqApi({ appointID: appntID, userId: doctorid });
    console.log("resp", resp);
    console.log("status", resp.status);
    toast.success("Doctor Request rejected");
  };
  const handleAppRejection = () => {
    console.log("rejction got clicke");
    console.log(doctorid,appntID)
  };
  const handleAppAcceptance= ()=>{
    console.log("Accpetance got clicked")
    console.log(doctorid,appntID)
  }
  return (
    <div className="requestCard">
      <h1 className="requestcardhead">We Care</h1>
      <div className="botreqcard">
        <div className="reqImg">
          <img src={img} alt="" srcset="" />
        </div>
        <div className="reqinfo">
          <p>Name: John Doe</p>
          <p>email: John Doe</p>
          {role === "admin" ? (
            <p>Speciality: John Doe</p>
          ) : (
            <p>Date : 12/12/12</p>
          )}
          {role === "admin" ? <p>Fees: John Doe</p> : <p>Time : 12:12 AM</p>}
          <div className="reqBtnCont">
            <button
              className="reqAccpt"
              onClick={
                role === "admin" ? handleAccpetClick : handleAppAcceptance
              }
            >
              Accpet
            </button>
            <button
              className="reqReject"
              onClick={
                role === "admin" ? handleDrRejectClick : handleAppRejection
              }
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestscard;
