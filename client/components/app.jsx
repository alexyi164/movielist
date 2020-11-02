import React from 'react';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.sampleMovies
    }
  }
  render() {
    return (
      // <div id="addMovie">
      //   <AddMovie />
      // </div>
      // <div id="searchBar">
      //   <Search />
      // </div>
      <div id="movie-list">
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;