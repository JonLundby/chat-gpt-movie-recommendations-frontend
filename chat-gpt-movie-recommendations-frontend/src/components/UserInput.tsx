import { useEffect, useState } from "react";
import { Movie, NotFoundObject } from "../data/data";
const endpoint = "http://localhost:8080/api/";

async function fetchMovie(topic: string): Promise<Response> {
    return fetch(`${endpoint}movie?topic=${encodeURIComponent(topic)}`).then((res) => res.json());
}

function UserInput() {
    const [topic, setTopic] = useState<string>("");
    const [movie, setMovie] = useState<Movie | NotFoundObject | undefined>(undefined); // [1


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value);
    };

    const handleFetch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log("Fetching data...");
        console.log(topic);

        const response = await fetchMovie(topic);
        
        // console.log(response);
        setMovie(response);
        // console.log(movie);// shows previous state which is empty object or the previous movie
        
    };

    useEffect(() => {
        console.log("Movie changed");
        console.log(movie);
    }, [movie]);

    return (
        <div className="user-input">
            <p>Define a topic in the textbox below (max 75 chars)</p>
            <form action="" className="topic-form" onSubmit={handleFetch}>
                <input className="user-input-textbox" type="text" placeholder="Enter your message" maxLength={75} onChange={handleChange}/>
                <button type="submit" className="btn btn-secondary">
                    Send
                </button>
            </form>
        </div>
    );
}

export default UserInput;