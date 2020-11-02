import React from 'react';
import { Component } from 'react';

// import { Button } from 'reactstrap';
import MovieList from './movieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies
    }
  }

  componentDidMount() {
    console.log('Mounted Successfully');
  }
  render() {
    return (
      // <div id="addMovie">
      //   <AddMovie />
      // </div>
      // <div id="searchBar">
      //   <Search />
      // </div>
      // <div id="movie-list-container">
      //   {/* <MovieList movies={this.state.movies} /> */}
      //   {this.state.movies}
      // </div>
      <div>
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
}

export default App;