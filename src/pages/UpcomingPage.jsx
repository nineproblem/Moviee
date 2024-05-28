import React from 'react';
import Header from '../components/Header';
import DataCard from '../components/DataCard';
function UpcomingPage() {
  return (
    <div>
      <Header/>
      <DataCard title={"Upcomming Now"} url={"https://api.themoviedb.org/3/movie/upcoming?api_key=7e9e43b3b9ea740d32cc72dc887033fd"}/>
    </div>
  )
}

export default UpcomingPage
