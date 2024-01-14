import React from 'react'

const TopicInfocard = ({title,cont}) => {
  return (
    <div className='TopicInfocard'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: cont }} />
    </div>
  )
}

export default TopicInfocard