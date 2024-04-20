import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import UserInput from "./components/UserInput";

function App() {
    return (
        <div className="body">
            <Header />
            <UserInput />
            <Movie />
        </div>
    );
}

export default App;
