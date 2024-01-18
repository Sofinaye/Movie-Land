import { useState, useEffect } from "react";
import MovieCard from "./MovieCard"
import SearchIcon from "./search.svg"
import "./App.css";
//788ba869
 const API_URL = 'http://www.omdbapi.com?apikey=788ba869';
//  const movie1 = {
//     "Title": "All American",
//     "Year": "2018–",
//     "imdbID": "tt7414406",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2OTIxZmYtMDI4OC00NjJlLTgxNzEtYmJlMmM2MGUwNTk4XkEyXkFqcGdeQXVyODUzNDU3NTA@._V1_SX300.jpg"
// }
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('All american');
    }, []);
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            
        </div>
    );
}
 export default App;