import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import dp from "../../images/dp.jpg" 
import axios from 'axios'
import FormContext from '../../context/Forms/FormsContext';
const TopicCard = ({topic,id,img}) => {
  const formcont = useContext(FormContext);
  const {setinfoArr} = formcont;
  const handleclick = async ()=>{
    const resp = await axios.get(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=${id}`)
    setinfoArr(resp.data.Result.Resources.Resource[0].Sections.section)
    console.log("resp ",resp.data.Result.Resources.Resource[0].Sections.section);
    console.log("i got clicked");
  }
  return (
    <div className='topicCard'>
      {console.log("heart",img)}
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