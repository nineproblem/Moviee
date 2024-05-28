import {  PlayIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const CardContainer = ({movie}) => {
  return (
     <Link className="data-card rounded-md overflow-hidden relative" to={`/details/${movie.id}`}>
        <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="{Movie.original_title}" className='h-full w-full object-cover '/>
        <div className="dark-ov"></div>
        <PlayIcon className='play-icon'/>       
     </Link>  
  )
}

export default CardContainer
