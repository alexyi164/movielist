import React from 'react';
import MovieListItem from './movieListItem.jsx';

const MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map(movie =>
      <MovieListItem movie={movie} />
    )}
  </div>
);

export default MovieList;