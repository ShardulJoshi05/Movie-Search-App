import React, {useState} from 'react';
import MovieCard from './MovieCard';
function SearchMovie(){
    
    const [query,setQuery] = useState('');
    const [movies,setMovies] = useState([]);    
    const searchMovies = async(e)=>{
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8c4bb43dc62133fad9c229c8adb75b87&language=en-US&query=${query}`
       try { 
       const res = await fetch(url);
       const data = await res.json();
       setMovies(data.results)
       }catch(err){
           console.log(err);
       }

    }

    return (
        <>
        <form className='form' onSubmit={searchMovies}>
            <label className="label" htmlFor='query'>Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Search Movie"
            value={query} onChange={(e)=> setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search!</button>
        </form>
        <div className="card-list">
            {movies.filter(movie=>movie.poster_path).map(movie=>(
               <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}
export default SearchMovie;