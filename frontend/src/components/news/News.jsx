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
      const resp = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=eb08c603be8841db95c9bcafd3909f70');
      console.log("news",resp);
      setNews(resp.data.articles)
      setLoading(false);
    } catch (error) {
      
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
          return <NewsCard title={ne.title} desc={ne.content} url={ne.url} urlToImage={ne.urlToImage}/>
        })}
      </div>
    </div>
  )
}

export default News