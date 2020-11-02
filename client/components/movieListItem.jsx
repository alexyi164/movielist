import React from 'react';

const MovieListItem = (props) => (
  <div className="movie-list-item">
    <div>
      {props.movie.title}
    </div>
  </div>
);

export default MovieListItem;