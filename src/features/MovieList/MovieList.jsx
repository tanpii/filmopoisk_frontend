import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from './movieList.module.css';

export default function MovieList({ movies, onMovieClick }) {
  return (
    <div className={styles.movieList}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie.id)} />
      ))}
    </div>
  );
}
