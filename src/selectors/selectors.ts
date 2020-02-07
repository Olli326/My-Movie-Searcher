import { createSelector } from 'reselect';

const allMovies = (movies: MoviesList[]) => movies;

export const favoriteMovies = createSelector(allMovies, movies => movies.filter(movie => movie.isFav === true));
