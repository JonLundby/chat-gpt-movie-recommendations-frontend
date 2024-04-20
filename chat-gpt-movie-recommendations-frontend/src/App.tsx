import "./App.css";
import Header from "./components/Header";
import { MovieContainer } from "./components/MovieContainer";

function App() {
    return (
        <div className="body">
            <Header />
            <MovieContainer />
        </div>
    );
}

export default App;
