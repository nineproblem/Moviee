import React from 'react';
import Header  from '../components/Header';
import DataCard from '../components/DataCard';
function PopularPage() {
  return (
    <div>
      <Header/>
      <DataCard title={"Popular Now"} url={"https://api.themoviedb.org/3/movie/popular?api_key=7e9e43b3b9ea740d32cc72dc887033fd"}/>
    </div>
  )
}

export default PopularPage
