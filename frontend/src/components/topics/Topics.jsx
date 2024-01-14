import React, { useState } from 'react'
import './Topics.css'
import TopicCard from './TopicCard'
import topicArr from './Topicarr'
import ReactLoading from 'react-loading';
const Topics = () => {
  const [loading,setLoadig] = useState(false);
  return (
    <div className='TopicsPage'>
        <h1 className='topicHead'>Health  Library</h1>
        <div className="topicCardCont">
        {loading&&<div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="#2E1F8B" height={100} width={100} /></div>}
          {topicArr.map((topic)=>{
            return <TopicCard topic ={topic.title} id={topic.id} img={topic.img} setLoadig={setLoadig}/>
        
          })}
        

        </div>
    </div>
  )
}

export default Topics