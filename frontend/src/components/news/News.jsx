import React, { useEffect, useState } from 'react'
import './News.css'
import NewsCard from './NewsCard'
import axios from 'axios'
import ReactLoading from 'react-loading';
const News = () => {
  const [news,setNews] = useState([]);
  const[laoding,setLoading]  = useState(false);
  useEffect(()=>{
   const fetchData = async ()=>{
    setLoading(true);
    try {
      const resp = await axios.get('https://newsdata.io/api/1/news?apikey=pub_36441255b18cd10ea28a873ed9442aff38776&language=en&category=health');
      console.log("news",resp);
      // data.results
      setNews(resp.data.results)
      setLoading(false);
    } catch (error) {
      console.log("Err",error);
    }
   };
   fetchData(); 
  },[])
  return (
    <div className='newspage'>
      <h1 className='newshead'>Health Updates</h1>
      <div className="newscont">
        {laoding && <div className="profileLoading" style={{width:"100%"}}><ReactLoading type="spokes" color="purple" height={120} width={120} /></div>}
        {news.map((ne)=>{
          return <NewsCard title={ne.title} desc={ne.content} url={ne.link} urlToImage={ne.image_url}/>
        })}
      </div>
    </div>
  )
}

export default News