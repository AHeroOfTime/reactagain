import React, { useState } from 'react';

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
      <label>
        Filter:
        <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      </label>
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map((movies) => (
            <li key={movies.name}>{movies.name}</li>
          ))}
      </ul>
    </div>
  );
}
