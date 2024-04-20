import { useState } from "react";

type UserInputProps = {
    onSubmitTopic: (topic: string) => Promise<void>;
};

function UserInput({ onSubmitTopic }: UserInputProps) {
    const [topic, setTopic] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value); // changing the topic state to the value in the textbox
    };

    const handleFetch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSubmitTopic(topic);
        setTopic(""); // resetting the topic state to an empty string
    };

    return (
        <div className="user-input">
            {/* <p>Define a topic in the textbox below (max 75 chars)</p> */}
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