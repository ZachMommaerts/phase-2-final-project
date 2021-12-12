import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function MovieList({ genre }) {
    const [ movies, setMovies] = useState([])

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`)
        .then(r => r.json())
        .then(movieList => setMovies(movieList.results))
        .catch(error => alert(error))
    }
    useEffect(fetchMovies, [])
        
    console.log(movies);
    const movieList = movies.map(movie => {
        return (
            <MovieCard
                key={movie.id}
                movie={movie}
            />
        )
    })

    return (
        <div>
            <h2>{genre} movies</h2>
            {movieList}
        </div>
    )
}

export default MovieList;