import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardContainer from "../components/CardContainer";

function SearchPage() {
    const {title} = useParams();
    const [searchMovies,setSearchMovies] = useState([]);
    useEffect(()=>{
        getSearchMovie ()
    },[title])
    const getSearchMovie = async () =>{
        const response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=7e9e43b3b9ea740d32cc72dc887033fd&query=${title}`);
        const data = await response.json();
        setSearchMovies(data.results);
    };
  return (
    <section>
        <h1 className="text-4xl font-bold text-mono text-white">
            Search results for "{title}"
        </h1>
        <div className="grid grid-cols-10 gap-3 mt-4">
            {
                searchMovies.length && searchMovies.map(
                    movie=>{
                        return (
                            <CardContainer key={movie.id} movie={movie}/>
                        )
                    }
                )
            }
        </div>
    </section>
  )
}

export default SearchPage
