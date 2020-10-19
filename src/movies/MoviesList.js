import React, { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

const movies = [
  {
    name: 'Forgetting Sarah Marshall',
  },
  {
    name: 'I Love You Man',
  },
  {
    name: 'Step Brothers',
  },
];

export function MoviesList() {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('hit effect');
  }, [filter]);
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
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
