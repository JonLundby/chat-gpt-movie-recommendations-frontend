function Movie() {
    return (
        <>
            <div className="movie">
                <section className="movie-info">
                    <h2>Movie Title</h2>
                    <p>Movie Description</p>
                    <p>Rating: 5/5</p>
                </section>
                <section className="movie-poster">
                    <img src="https://via.placeholder.com/1200" alt="Movie Poster" />
                </section>
            </div>
        </>
    );
}

export default Movie;