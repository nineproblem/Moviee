import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';
import { useEffect, useState } from 'react';


const Header = () => {
  const [ratedMovies,setRatedMovies ] = useState([]);
  useEffect(()=>{
    getRatedMovies();
  },[]);
  const getRatedMovies = async () => {
    const response = await fetch ("https://api.themoviedb.org/3/movie/top_rated?api_key=7e9e43b3b9ea740d32cc72dc887033fd ");
    const data =await response.json();
    setRatedMovies(data.results);
  };

  return (
    <section className='w-screen h-screen'>
      <Splide
        options={{
          type: 'loop',
          arrows: false,
          autoplay: true,
          interval: 1000, 
        }}    
      >
       {
        ratedMovies.map(movie=>{
          return (
            <SplideSlide>
              <HeaderCard movie={movie} key={movie.id}/>
            </SplideSlide>
          )
        })
       }
      </Splide>
    </section>
  );
};

export default Header;
