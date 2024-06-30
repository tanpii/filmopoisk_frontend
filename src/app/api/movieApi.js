import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ title, genre, release_year, sort_by = 'rating', order = 'desc', page = 1, limit = 10 } = {}) => {
        const params = {};
        if (title && title !== '') params.title = title;
        if (genre && genre !== '0') params.genre = genre;
        if (release_year && release_year !== '0') params.release_year = release_year;
        params.sort_by = sort_by;
        params.order = order;
        params.page = page;
        params.limit = limit;

        return {
          url: 'search',
          params,
        };
      },
    }),
    getMovie: builder.query({
      query: (id) => `movie/${id}`,
    }),
    rateMovie: builder.mutation({
      query: ({ movieId, user_rate }) => ({
        url: 'rateMovie',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: { movieId, user_rate },
      }),
      invalidatesTags: ['Movie'],
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useRateMovieMutation } = movieApi;
