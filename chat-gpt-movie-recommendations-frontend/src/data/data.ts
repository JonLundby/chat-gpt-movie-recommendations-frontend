// interface for movie data. used in UserInput.tsx for state management so that the state can be either a movie or not found
export interface Movie {
    Title: string;
    Year: string;
    Released: string;
    Runtime: string;
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: [];
    Response: string;
    Type: string;
    Website: string;
    Writer: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
}

export interface NotFoundObject {
    Response: string;
    Error: string;
}
