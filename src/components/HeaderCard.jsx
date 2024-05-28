import React from 'react'
import '../layouts/header.css'; 
import { PlayCircleIcon } from '@heroicons/react/16/solid';

function HeaderCard({movie}) {
  return (
    <div className='h-full w-full relative'>
    <div className="header-card">
    <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
     alt={`${movie.title} backdrop`} 
     className='h-full w-full object-cover'/>
     
    </div>
     <div className='dark-ov'></div>
     <div className='text-box'>
        <h1 className='text-3xl font-extra-bold'>{movie.title}</h1>
        <p className='text-sm font-medium '>{movie.overview}</p>
        <button className='bg-white text-black px-3 py-2 rounded-md font-medium text-lg mt-4'><PlayCircleIcon className='w-5 h-6 inline-block me-2'/> Watch now</button>
     </div>
</div>
  )
}

export default HeaderCard
