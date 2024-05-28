import React from 'react'
import Header from '../components/Header'
import DataCard from '../components/DataCard'

function RatingPage() {
  return (
    <div>
      <Header/>
      <DataCard title={"Top Rating"} url={"https://api.themoviedb.org/3/movie/top_rated?api_key=7e9e43b3b9ea740d32cc72dc887033fd "}/>
    </div>
  )
}

export default RatingPage
