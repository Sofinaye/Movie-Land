import { useEffect } from "react";
import SearchIcon from "./search.svg"
//788ba869
 const API_URL = 'http://www.omdbapi.com?apikey=788ba869';
 const movie1 = {
    "Title": "All American",
    "Year": "2018–",
    "imdbID": "tt7414406",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2OTIxZmYtMDI4OC00NjJlLTgxNzEtYmJlMmM2MGUwNTk4XkEyXkFqcGdeQXVyODUzNDU3NTA@._V1_SX300.jpg"
}
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        console.log(data.Search);
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
                    value="All American"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}
 export default App;