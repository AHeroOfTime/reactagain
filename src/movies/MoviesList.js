/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

export function MoviesList() {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=6d03cf1e646077d89ad784e4677f2f4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=6d03cf1e646077d89ad784e4677f2f4d`;

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL);
      const movies = await res.json();
      setMovies(movies.results);
    } catch (e) {
      console.error(e);
    }
  };

  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL);
      const config = await res.json();
      setConfig(config);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getConfig();
    getMovies();
  }, []);
  // const varName = useRef(initialValue) --import { useRef }
  // const ulRef = useRef(null);
  // const ref = useRef(null);

  return (
    <div>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(ref.current.value);
        }}
      >
        <input ref={ref} />
        <button />
      </form> */}
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase()),
          )
          .map((movie) => (
            <Movie key={movie.id} config={config} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
