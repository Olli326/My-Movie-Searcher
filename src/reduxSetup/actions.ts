import { MOVIES_ADD, FAV_ADD, MOVIE_SEARCH, MOVIE_FILTRE_GENRE, ALL_MOVIES_ADD } from './actionsTypes';

export const addMovies = (payload: MoviesList) => ({
    type: MOVIES_ADD,
    payload,
});
export const addAllMovies = (payload: MoviesList[]) => ({
    type: ALL_MOVIES_ADD,
    payload,
});

export const addFavorite = (id: number) => ({
    type: FAV_ADD,
    payload: id,
});
export const searchMovies = (title: string) => ({
    type: MOVIE_SEARCH,
    payload: title,
});
export const filtreGenre = (genres: string) => ({
    type: MOVIE_FILTRE_GENRE,
    payload: genres,
});
