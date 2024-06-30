import React from 'react';
import { useSelector } from 'react-redux';
import styles from './movieInfo.module.css';
import Score from '../../shared/ui/Score/Score';
import { useRateMovieMutation } from '../../app/api/movieApi';

export default function MovieInfo({ movie }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [rateMovie] = useRateMovieMutation();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getMovieRatingFromLocalStorage = () => {
    const movieRatings = JSON.parse(localStorage.getItem('movie_ratings')) || {};
    return movieRatings[movie.id] || 0;
  };

  const saveMovieRatingToLocalStorage = (newRating) => {
    const movieRatings = JSON.parse(localStorage.getItem('movie_ratings')) || {};
    movieRatings[movie.id] = newRating;
    localStorage.setItem('movie_ratings', JSON.stringify(movieRatings));
  };

  const handleRatingChange = (newRating) => {
    if (isLoggedIn && newRating !== getMovieRatingFromLocalStorage()) {
      rateMovie({ movieId: movie.id, user_rate: newRating })
        .unwrap()
        .then(response => {
          saveMovieRatingToLocalStorage(newRating);
        })
        .catch(error => {
          console.error('Error updating movie rating:', error);
        });
    }
  };

  return (
    <div className={styles.movieInfo}>
      <div className={styles.poster}>
        <img src={movie.poster} alt={`${movie.title} poster`} />
      </div>
      <div className={styles.details}>
        <div className={styles.mainInfoContainer}>
          <h2 className={styles.title}>{movie.title}</h2>
          {isLoggedIn && <Score scored={getMovieRatingFromLocalStorage()} onChange={handleRatingChange} />}
        </div>
        <div className={styles.meta}>
          <div>
            <span className={styles.detailName}>Жанр: </span>
            <span className={styles.detail}>{capitalizeFirstLetter(movie.genre)}</span>
          </div>
          <div>
            <span className={styles.detailName}>Год выпуска: </span>
            <span className={styles.detail}>{movie.release_year}</span>
          </div>
          <div>
            <span className={styles.detailName}>Рейтинг: </span>
            <span className={styles.detail}>{movie.rating}</span>
          </div>
          <span className={styles.detailName}>Описание</span>
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
