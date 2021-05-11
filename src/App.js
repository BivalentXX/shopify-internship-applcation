import React from 'react';
import { useState, useEffect } from 'react';
import testUtils from 'react-dom/test-utils';
import './App.css'

import OMDb from './util/OMDb'

function App() {
  const [movietitle, setMovietitle] = useState();
  const [movielist, setMovielist] = useState();

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        setMovielist(OMDb.search(movietitle))

        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);



  return (
    <>
    <div className="app">
      <h1>The Shoppies</h1>
      <div className="search-bar">
        <label for="searchbar">Movie Title</label>
        <br></br>
        <div className="search-input-field">
          <input 
          aria-label="Search for a movie"
          type="text" 
          id="searchbar"
          className="search-input"
          onChange={({ target }) => setMovietitle(target.value)}
          value={movietitle}
          />
        </div>
      </div>
      <div className="lists">
        <div className="results">
          {movielist.map((movie) => 
          (
          <>
          <ul>{movie.title}</ul>
          <button>nominate</button>
          </>
          )
          )}
        </div>
        <div className="nominations">Nominations</div>
      </div>
    </div>
    </>
  );
}

export default App;
