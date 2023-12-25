import React from 'react'
import "./Section22.css"
import InfoCard from '../Cards/InfoCard'
import phn2 from "../../images/phone2.png"
import adharc from "../../images/aadharcard.png"
import "./Sec22resp.css"
const Section22 = ({arr}) => {

  return (
    <div  className='section22'>
        <div className="sec22left">
          {arr.map((ele)=>{
            return <InfoCard icon={ele.logo} head={ele.head} />
          })}
        </div>
        <div className="sec22right">
          <img src={adharc} alt="" srcset="" className='adharc' />
          <img src={phn2} alt="" className="phn2" />
        </div>
    </div>
  )
}

export default Section22