import { MovieObject, NotFoundObject } from "../data/data";

interface MovieProps {
    movie: MovieObject | NotFoundObject | undefined;
}

function Movie({ movie }: MovieProps) {
    
    if (!movie) { // when no movie has been fetched yet
        return (
            <div className="movie-none">
                <section className="movie-info">
                    <h2>Enter a topic to get a movie</h2>
                </section>
            </div>
        );
    } else if ("Error" in movie) { // if movie has an error key, then it is a NotFoundObject
        return (
            <div className="movie-none">
                <section className="movie-info">
                    <h2>Movie not found</h2>
                </section>
            </div>
        );
    }
    return (
        // if movie is a MovieObject
        <>
            <div className="movie">
                <section className="movie-info">
                    <h2>Title: {movie.Title}</h2>
                    <p>Released: {movie.Released}</p>
                    <p>Rated: {movie.Rated}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Director: {movie.Director}</p>
                    <p>Awards: {movie.Awards}</p>
                </section>
                <section className="movie-poster">
                    <img src={movie.Poster} alt="Movie Poster" />
                </section>
                <section className="movie-info">
                    <p>Ratings:</p>
                    <ul>
                        {movie.Ratings.map((rating, index) => (
                            <li key={index}>
                                <p>{rating.Source}:</p> {rating.Value}
                            </li>
                        ))}
                    </ul>
                    <p>IMDB rating: {movie.imdbRating}</p>
                    <p>IMDB votes: {movie.imdbVotes}</p>
                </section>
            </div>
        </>
    );
}

export default Movie;