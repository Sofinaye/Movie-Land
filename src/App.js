import { useEffect } from "react";
import SearchIcon from "./search.svg"
//788ba869
 const API_URL = 'http://www.omdbapi.com?apikey=788ba869';
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
            </div>
        </div>
    );
}
 export default App;