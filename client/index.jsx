import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
// import '/node_modules/bootstrap/dist/css/bootstrap';

var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(
  <App movies={sampleMovies}/>, document.getElementById('app')
)