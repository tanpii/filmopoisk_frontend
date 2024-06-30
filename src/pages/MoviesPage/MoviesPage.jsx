import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetMoviesQuery } from '../../app/api/movieApi';
import MovieList from '../../features/MovieList/MovieList';
import styles from './moviesPage.module.css';
import SearchInput from '../../shared/ui/SearchInput/SearchInput';
import Selector from '../../shared/ui/Selector/Selector';
import Pagination from '../../shared/ui/Pagination/Pagination';
import Loader from '../../shared/ui/Loader/Loader';

export default function MoviesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const GENRES = {
    '0': 'Не выбран',
    comedy: 'Комедия',
    drama: 'Драма',
    action: 'Боевик',
    thriller: 'Триллер',
    horror: 'Ужасы',
    family: 'Семейный',
    cartoon: 'Анимированный',
    fantasy: 'Фэнтези',
    romance: 'Романтика',
    adventure: 'Приключения',
    musical: 'Мьюзикл',
    war: 'Военный',
  };

  const YEARS = {
    '0': 'Не выбран',
    '2009': '2009',
    '2008': '2008',
    '2007': '2007',
    '2006': '2006',
    '1990-2005': '1990-2005',
    '1950-1989': '1950-1989',
  };

  const title = searchParams.get('title') || '';
  const genre = searchParams.get('genre') || '0';
  const release_year = searchParams.get('release_year') || '0';
  const queryPage = parseInt(searchParams.get('page')) || 1;

  const [page, setPage] = useState(queryPage);
  const [filters, setFilters] = useState({ title, genre, release_year });

  const { data, error, isLoading, isFetching } = useGetMoviesQuery({ ...filters, page });
  const movies = data?.search_result || [];
  const totalPages = data?.total_pages || 0;

  useEffect(() => {
    const params = {};
    if (filters.title !== '') params.title = filters.title;
    if (filters.genre !== '0') params.genre = filters.genre;
    if (filters.release_year !== '0') params.release_year = filters.release_year;
    params.page = page;
  
    setSearchParams(params);
  }, [filters, page, setSearchParams]);
  

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.moviesPage}>
      <div className={styles.filters}>
        <h2 className={styles.filtersHeader}>Фильтр</h2>
        <Selector 
          options={GENRES} 
          placeholder='Выберите жанр' 
          onChange={(genre) => handleFilterChange({ genre })}
          defaultValue={title !== undefined ? { value: genre, text: GENRES[genre] } : undefined}
        >
          Жанр
        </Selector>

        <Selector
          options={YEARS} 
          placeholder='Выберите год' 
          onChange={(release_year) => handleFilterChange({ release_year })}
          defaultValue={release_year !== undefined ? { value: release_year, text: YEARS[release_year] } : undefined}
        >
          Год
        </Selector>
      </div>
      <div className={styles.movies}>
        <SearchInput placeholder="Название фильма" onChange={(title) => handleFilterChange({ title })} defaultValue={title !== undefined ? title : undefined}/>
        {isLoading || isFetching ? (
          <Loader/>
        ) : error ? (
          <div>Ошибка загрузки фильмов</div>
        ) : (
          <>
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
            {totalPages > 1 && (
              <Pagination
                onPageChange={handlePageChange}
                currentPage={page}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
