import { PlayIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const [movie,SetMovie] = useState({});
  const {id} = useParams();
    useEffect(()=>{
        getDetailMovie();
    },[id]);
    const getDetailMovie = async ()=>{
     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7e9e43b3b9ea740d32cc72dc887033fd`);
     const data = await response.json();
     console.log(data);
     SetMovie(data);
    };
  return (
    <>
      {
        movie && (
          <section className='w-full h-screen relative'>
          <div className='h-2/3 relative'>
          <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='{movie.title}' className='w-full h-full object-cover'/>
          <div className="dark-ov"></div>
          </div>
          <div className='detail-container'>
          <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='{movie.title}' className='w-52 rounded-md'/>
          <div className='ms-4 text-white' >
            <h1 className='text-3xl font-semibold'>{movie.original_title}</h1>
            <p className='texl-lg mb-3'> <span className='text-red-500'>Release On</span> : {movie.release_date} </p>
            <p className='texl-lg mb-3'> <span className='text-red-500'>Runtime</span> : {movie.runtime} min</p>
            {
             movie.genres && movie.genres.map((g)=>{
                return <span key={g.id} className='bg-red-500 px-2 py-2 rounded-xl font-bols me-1'>{g.name}</span>
              }
              )
            }
            <h2 className='text-base mt-3 mb-5'>{movie.overview}</h2>
            <Link to={movie.homepage} className='font-bold text-lg px-3 py-2 rounded-lg border-2 border-red-500'> <PlayIcon className='w-6 h-6 text-red-500 inline-block me-2'/> Watch Now
            </Link>
          </div>
          </div>
          </section>
        )
      }
    </>
  );
};

export default DetailPage;
