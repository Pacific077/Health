import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../images/newsbg.jpg"

const NewsCard = ({title,desc,url,urlToImage}) => {
  return (
    <div className='newscard'>
        <div className="newsimg"  style={{ backgroundImage: `url(${urlToImage?urlToImage:img})` }}></div>
        <div className="newsdetails">

        <p className="newstitle">{title}</p>
        <p className="newsdesc">{desc?desc:"Please click on read more to know more about the healdline"}<Link to={url} target='blank'> ...Read more ?</Link></p>
        </div>
    </div>
  )
}

export default NewsCard