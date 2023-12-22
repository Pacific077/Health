import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
const DescCard = (props) => {
  return (
    <div className="sect21cont">
    <p className="greembg">
    {props.frst}
    </p>
    <h1 className="bigHead tealc">
    {props.head}
    </h1>
    <p className="bgPara tealc">
    {props.desc}
    </p>
    <div className="sec21btncont">
        <button className='playStorebtn'>{props.btn1} <AiOutlineArrowRight/></button>
        <button className='AppStorebtn'>{props.btn2}</button>
    </div>
</div>
  )
}

export default DescCard