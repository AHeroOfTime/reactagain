import React from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie }) {
  // useEffect(() => {
  //   console.log(movie.name);
  // }, [movie.name]);

  return (
    <div>
      <li>{movie.name}</li>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
