import React from 'react'
import img from "../../images/dp.jpg"
const Requestscard = () => {
  return (
    <div className='requestCard'>
        <h1 className="requestcardhead">We Care</h1>
        <div className="botreqcard">
            <div className="reqImg">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="reqinfo">
                <p>Name: John Doe</p>
                <p>email: John Doe</p>
                <p>Speciality: John Doe</p>
                <p>Fees: John Doe</p>
                <div className="reqBtnCont">
                    <button className='reqAccpt'>Accpet</button>
                    <button className='reqReject'>Reject</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Requestscard