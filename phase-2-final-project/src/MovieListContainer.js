import { useEffect } from 'react';

function MovieListContainer() {

    function getMovies() {
        fetch(`https://api.watchmode.com/v1/sources/?apiKey=${process.env.REACT_APP_API_KEY}`)
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