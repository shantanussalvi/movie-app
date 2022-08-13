import MovieList from "./components/MovieList";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {

  // Used to store array of films from the OMDB api
  const [movies, setMovies] = useState([])
  // Used to dynamically change the search(s) parameter in api url
  const [searchValue, setSearchValue] = useState('')

  // Requests movies for url of the api
  const getMovieRequest = async (searchValue) => {
    // `` is used to declare template string sp ${} can be used to insert javascript in between the string
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4d5183e5`;

    // makes a request to the url
    const response = await fetch(url);
    // Converts http response into json
    const responseJson = await response.json();
    
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }

  // calls getMovieRequest when searchValue changes
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])
  

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies' />
        <SearchBox value = {searchValue} setSearchValue = {setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
