import React from 'react';
import styles from './movieCard.module.css';
import Score from '../../shared/ui/Score/Score';

export default function MovieCard({ movie, onClick }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={styles.filmCard} onClick={onClick}>
      <div className={styles.poster}>
        <img src={movie.poster} alt={`${movie.title} poster`}/>
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{movie.title}</h2>
        <div className={styles.meta}>
          <div className={styles.detailContainer}>
            <span className={styles.detailName}>Жанр</span>
            <span className={styles.detailName}>Год выпуска</span>
            <span className={styles.detailName}>Описание</span>
            
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detail}>{capitalizeFirstLetter(movie.genre)}</span>
            <span className={styles.detail}>{movie.release_year}</span>
            <p className={styles.detail}>{movie.description}</p>
          </div>
        </div>
      </div>
      <Score onChange={() => console.log('score changed')}></Score>
    </div>
  );
}
