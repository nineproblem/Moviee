import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer';

const DataCard = ({title,url}) => {
  const [dataMovies,setDataMovies] = useState([]);
  const getDataMovies = async ()=> {
    const response = await fetch(url);
    const data = await response.json();
    setDataMovies (data.results); 
   };
  useEffect(()=>{
    getDataMovies();
  },[]);
 
  return (
    <section className='px-8 my-10'>
      <h1 className='text-4xl font-mono font-bold text-white'>{title}</h1>
      <div className='grid grid-cols-10 gap-3 mt-4'>
      {
        dataMovies.length && dataMovies.map((movie)=>{
          return <CardContainer movie={movie} key={movie.id}/>;       
        })}
       </div>
    </section>
  )
}

export default DataCard
