import UserInput from "./UserInput";
import Movie from "./Movie";
import { useState } from "react";
import { MovieObject, NotFoundObject } from "../data/data";
const endpoint = "http://localhost:8080/api/";

export function MovieContainer() {
    const [movie, setMovie] = useState<MovieObject | NotFoundObject | undefined>(undefined);


    async function fetchMovie(topic: string): Promise<void>{
        const response = await fetch(`${endpoint}movie?topic=${encodeURIComponent(topic)}`);
        console.log(`${endpoint}movie?topic=${encodeURIComponent(topic)}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setMovie(data);
            // return data;
        } else {
            setMovie({ Response: "False", Error: "Movie not found" });
            // return { Response: "False", Error: "Movie not found" };
        }
    }

    return (
        <div className="movie-container">
            <UserInput onSubmitTopic={fetchMovie}/> 
            <Movie movie={movie} />
        </div>
    );
}