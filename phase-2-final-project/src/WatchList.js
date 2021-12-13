import { useEffect, useState} from 'react';

function WatchList() {
    const [ movies, setMovies ] = useState([]);

    const fetchMovies = () => {

    }
    useEffect(fetchMovies, [])

    return (
        <div></div>
    )
}

export default WatchList;