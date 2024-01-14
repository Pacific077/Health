import React, { useContext } from 'react'
import "./TopicInfo.css"
import FormContext from '../../context/Forms/FormsContext'
import temp from "../../images/care.jpg"
import TopicInfocard from './TopicInfocard'
const TopicInfo = () => {
  const info = useContext(FormContext);
  const {infoArr,infoimg,Infotitle} = info;
  return (
    <div className='TopicInfoPage'>
        <div className="topicInfoheader">
            <div className="topicInfoHEaderLeft">

            <div className="blurbgimg"></div>
            <h1>{Infotitle}</h1>
            </div>
            <div className="topicinfoheaderight"style={{ backgroundImage: `url(${infoimg?infoimg:temp})` }}>
                
            </div>
        </div>
        <div className="topicinfoCont">
          {infoArr.map((info)=>{
            return <TopicInfocard title = {info.Title} cont = {info.Content}/>
          })}
          
        </div>
    </div>
  )
}

export default TopicInfo