import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import { useNavigate  } from "react-router-dom";
const DescCard = (props) => {
  const navigate = useNavigate()
  const handleCLick =()=>{
    console.log("i got clicked")
    console.log("props",props)
    navigate(`/${props.navigate}`)
  }
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
        <button className='playStorebtn' onClick={handleCLick}>{props.btn1} <AiOutlineArrowRight/></button>
    </div>
</div>
  )
}

export default DescCard