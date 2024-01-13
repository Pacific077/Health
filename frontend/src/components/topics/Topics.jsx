import React from 'react'
import './Topics.css'
import TopicCard from './TopicCard'
import topicArr from './Topicarr'
const Topics = () => {
  return (
    <div className='TopicsPage'>
        <h1 className='topicHead'>Health  Library</h1>
        <div className="topicCardCont">
          {topicArr.map((topic)=>{
            return <TopicCard topic ={topic.title} id={topic.id} img={topic.img}/>
        
          })}
        

        </div>
    </div>
  )
}

export default Topics