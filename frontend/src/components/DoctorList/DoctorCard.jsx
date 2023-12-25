import React, { useContext } from 'react'
import dp from '../../images/dp.jpg'
import FormContext from "../../context/Forms/FormsContext";
const DoctorCard = ({name,Fee ,Speciality,DrId}) => {
    const formcontext = useContext(FormContext);
    const {setVisiblity,setDoctorID} = formcontext;
    const handleCLick = ()=>{
        console.log("drrr",DrId,name,Fee)
        setDoctorID(DrId)
        console.log("drid",DrId)
        setVisiblity()
    }
  return (
    <div className="doctorcard">
    <div className="docCardImg">
        <img src={dp} alt="" srcset="" />
    </div>
    <div className="docCardName">
        <h3>Dr {name}</h3>
        <p>{Speciality}</p>
    </div>
    <div className="DocCardFeeDetails">
        <p>Fee : {Fee}</p>
    </div>
    <div className="DocCardBtnCont">
        <button onClick={handleCLick}>Book Now</button>
    </div>
</div>
  )
}

export default DoctorCard