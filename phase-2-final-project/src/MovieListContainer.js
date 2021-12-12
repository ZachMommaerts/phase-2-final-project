import { useEffect, useState } from 'react';
import NewlyReleasedList from './NewlyReleasedList';
import ActionList from './ActionList';
import ComedyList from './ComedyList';
import HorrorList from './HorrorList';
import SciFiList from './SciFiList';
import MovieList from './MovieList';

function MovieListContainer() {
    const [ movieList, setMovieList] = useState([])

    return (
        <div>
            <MovieList genre='28' />
            <MovieList genre='35' />
            <NewlyReleasedList />
            <ActionList />
            <ComedyList />
            <HorrorList />
            <SciFiList />
        </div>
    )
}

export default MovieListContainer;