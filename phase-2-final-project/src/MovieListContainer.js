import { useEffect, useState } from 'react';
import MovieList from './MovieList';

function MovieListContainer({ setMovie }) {
    const [ movieList, setMovieList] = useState([])

    return (
        <div>
            <MovieList genreName='Action' genre='28' setMovie={setMovie} />
            <MovieList genreName='Comedy'genre='35' setMovie={setMovie} />
            <MovieList genreName='Horror'genre='27' setMovie={setMovie} />
            <MovieList genreName='Sci-Fi'genre='878' setMovie={setMovie} />
            <MovieList genreName='Fantasy'genre='14' setMovie={setMovie} />
        </div>
    )
}

export default MovieListContainer;