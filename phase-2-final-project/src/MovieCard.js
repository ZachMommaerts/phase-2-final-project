import styled from "styled-components";

const PosterImage = styled.img`
    width: 10em;
    border-radius: .5em;
    margin: 1em;
`;

function MovieCard( { movie }) {

    return (
        <div>
            <PosterImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button>Add to Watchlist</button>
        </div>
    )
}

export default MovieCard;