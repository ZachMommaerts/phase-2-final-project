import { useEffect, useState } from 'react';
import MovieList from './MovieList';

function MovieListContainer() {
    const [ movieList, setMovieList] = useState([])

    return (
        <div>
            <MovieList genreName='Action' genre='28' />
            <MovieList genreName='Comedy'genre='35' />
            <MovieList genreName='Horror'genre='27' />
            <MovieList genreName='Sci-Fi'genre='878' />
            <MovieList genreName='Fantasy'genre='14' />
        </div>
    )
}

export default MovieListContainer;