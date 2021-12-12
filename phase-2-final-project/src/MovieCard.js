import styled from "styled-components";

const PosterImage = styled.img`
    width: 10em;
`;

function MovieCard( { movie }) {
    return (
        <div>
            <PosterImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
        </div>
    )
}

export default MovieCard;