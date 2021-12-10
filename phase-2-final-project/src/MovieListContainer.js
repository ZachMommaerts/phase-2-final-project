import { useEffect, useState } from 'react';

function MovieListContainer() {
    const [ movieList, setMovieList] = useState([])

    function getMovies() {
        fetch(`https://api.watchmode.com/v1/genres/?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(r => r.json())
        .then(movies => console.log(movies))
        .catch(error => alert(error))
    }
    useEffect(getMovies, [])

    return (
        <div></div>
    )
}

export default MovieListContainer;