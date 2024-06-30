import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../app/api/movieApi';
import ActorList from '../../features/ActorList/ActorList';
import MovieInfo from '../../features/MovieInfo/MovieInfo';
import styles from './moviePage.module.css'
import Loader from '../../shared/ui/Loader/Loader';

export default function MoviePage() {
  const { id } = useParams();
  const { data: movie, error, isLoading } = useGetMovieQuery(id);

  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    console.error('Ошибка при загрузке фильма: ', error)
    return <div>Фильм не найден</div>;
  }

  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  const { actors, ...movieInfo } = movie;

  return (
    <div className={styles.moviePage}>
      <MovieInfo movie={movieInfo} />
      <h2 className={styles.actorHeader}>Актёры</h2>
      <ActorList actors={actors} />
    </div>
  );
}
