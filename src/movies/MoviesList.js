import React, { useState } from 'react';
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

  return (
    <div>
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
