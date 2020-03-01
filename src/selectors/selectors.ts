import { createSelector } from 'reselect';

const allMovies = (movies: MoviesList[]) => movies;
const allGenres = (movies: MoviesList[]) => movies.map(movie => movie.genres);
const listMovies = (state: RootStore) => {
    const { search, genres } = state;

    if (genres.length) {
        return state.genres;
    }

    if (search === '') {
        return state.list;
    }

    if (search.length) {
        return state.search;
    }

    return state.list;
};

export const favoriteMovies = createSelector(allMovies, movies => movies.filter(movie => movie.isFavorite === true));

export const listGenres = createSelector(allGenres, genres => Array.from(new Set(genres.flat())));

export const selectMovies = createSelector(listMovies, movies => movies);
