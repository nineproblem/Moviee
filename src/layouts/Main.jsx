import React from 'react';
import Nav from '../components/Nav';
import {Routes,Route} from "react-router-dom";
import PopularPage from "../pages/PopularPage";
import UpcomingPage from "../pages/UpcomingPage";
import RatingPage from "../pages/RatingPage";
import DetailPage from '../pages/DetailPage';
import SearchPage from '../pages/SearchPage';
function Main() {
  return (
    <section>
      <Nav/>
      <Routes>
        <Route index element={<PopularPage/>}/>
        <Route element={<UpcomingPage/>} path={'/upcoming'}/>
        <Route element={<RatingPage/>} path={'/rating'}/>
        <Route element={<DetailPage/>} path={'/details/:id'}/>
        <Route element={<SearchPage/>} path={'search/:title'} />
      </Routes>
      
    </section>
  )
}

export default Main
