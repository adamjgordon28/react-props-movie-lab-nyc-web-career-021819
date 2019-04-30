import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
  let movieCardArray = movieData.map((movie)=> {
    return <MovieCard key={movie.title} {...movie}/>
  })
  return movieCardArray
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
