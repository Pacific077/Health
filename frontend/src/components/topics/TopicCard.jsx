import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import dp from "../../images/dp.jpg" 
import axios from 'axios'
import {  useNavigate } from "react-router-dom";

import FormContext from '../../context/Forms/FormsContext';
const TopicCard = ({topic,id,img,setLoadig}) => {
  
  const navigate = useNavigate()
  const formcont = useContext(FormContext);
  const {setinfoArr ,setinfoimg,setInfoTitle} = formcont;
  const handleclick = async ()=>{
    setLoadig(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
    const resp = await axios.get(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=${id}`)
    setinfoArr(resp.data.Result.Resources.Resource[0].Sections.section)
    setinfoimg(resp.data.Result.Resources.Resource[0].ImageUrl)
    setInfoTitle(resp.data.Result.Resources.Resource[0].Title)
    console.log("resp ",resp);
    console.log("i got clicked");
    setLoadig(false);
    navigate('/topicInfo')
  }
  return (
    <div className='topicCard'>
      {/* {console.log("heart",img)} */}
        <div className="imgcont" style={{ backgroundImage: `url(${img?img:dp})` }} ></div>
        <div className="topicinfo">
            <p>{topic}</p>
            <div className="moreinfo">
            <p >Find out more</p>
            <button><FontAwesomeIcon icon={faGreaterThan} onClick={handleclick} /></button>

            </div>
        </div>
    </div>
  )
}

export default TopicCard