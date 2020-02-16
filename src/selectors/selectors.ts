import { createSelector } from 'reselect';

const allMovies = (movies: MoviesList[]) => movies;
const allGenres = (movies: MoviesList[]) => movies.map(movie => movie.genres);

export const favoriteMovies = createSelector(allMovies, movies => movies.filter(movie => movie.isFavorite === true));

export const listGenres = createSelector(allGenres, genres => Array.from(new Set(genres.flat())));
