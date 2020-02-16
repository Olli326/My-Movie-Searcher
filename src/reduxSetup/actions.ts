import { MOVIES_ADD, FAV_ADD, MOVIE_SEARCH, MOVIE_FILTRE_GENRE } from './actionsTypes';

export const addMovies = (newElement: MoviesList[]) => ({
    type: MOVIES_ADD,
    payload: newElement,
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
