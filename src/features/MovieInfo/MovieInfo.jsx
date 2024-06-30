import React from 'react';
import styles from './movieInfo.module.css';
import Score from '../../shared/ui/Score/Score';

export default function MovieInfo({ movie }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={styles.movieInfo}>
      <div className={styles.poster}>
        <img src={movie.poster} alt={`${movie.title} poster`}/>
      </div>
      <div className={styles.details}>
        <div className={styles.mainInfoContainer}>
          <h2 className={styles.title}>{movie.title}</h2>
          <Score onChange={() => console.log('score changed')}></Score>
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
