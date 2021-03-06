import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const ListOfMovies = styled.div `
    margin: 2em;
    display: flex;
    overflow: auto;
`;

function MovieList({ genre, genreName, setMovie }) {
    const [ movies, setMovies] = useState([])

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${parseInt(genre)}`)
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
                setMovie={setMovie}
            />
        )
    })

    return (
        <ListOfMovies>
            <h2>{genreName} movies</h2>
            {movieList}
        </ListOfMovies>
    )
}

export default MovieList;