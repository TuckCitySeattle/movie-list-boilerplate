import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.component {
  constructor(props) {
    super(props) {
      this.state = {
        movies = movies;
      }
    }
  }

  render() {
    return (
    <div> Movie: {this.state.movies}</div>
    );
  }
}

export default MovieList;