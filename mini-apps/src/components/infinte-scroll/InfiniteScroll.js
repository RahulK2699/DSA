import React, { useState, useEffect } from 'react'

const InfiniteScroll = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);


  const fetchData = async () => {
   try {
    setLoading(true);
    const promise = await fetch(`https://jsonplaceholder.typicode.com/comments?page=${page}&_limit=10`);
    const res = await promise.json();
    setData((prevData) => [...prevData, ...res]);
    setLoading(false);
   }
   catch (err) {
    setLoading(false);
    console.log(err.message)
   }
  }
  
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 1 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }
  

 useEffect(() => {
  fetchData();
 }, [page])

 useEffect (() => {
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
 },[])
  
  return (
    <section className='landing'>
      <div className='row container'>
        <h1 className='landing-heading'>
          Infinte Scroll
        </h1>
        {
          data && data.map((item,index) => (
            <div key={index+item} className='landing-post'>
              <h3 className='landing-post-title'>{item.body}</h3> 
            </div>
          ))
        }

        {
          loading && (
           <div className='loading'></div>
          )
        }
      </div>
    </section>
  )
}

export default InfiniteScroll