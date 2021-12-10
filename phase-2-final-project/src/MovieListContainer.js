import { useEffect, useState } from 'react';
import NewlyReleasedList from './NewlyReleasedList';
import ActionList from './ActionList';
import ComedyList from './ComedyList';
import HorrorList from './HorrorList';
import SciFiList from './SciFiList';

function MovieListContainer() {
    const [ movieList, setMovieList] = useState([])

    function getMovies() {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(r => r.json())
        .then(movies => console.log(movies))
        .catch(error => alert(error))
    }
    useEffect(getMovies, [])

    return (
        <div>
            <NewlyReleasedList />
            <ActionList />
            <ComedyList />
            <HorrorList />
            <SciFiList />
        </div>
    )
}

export default MovieListContainer;