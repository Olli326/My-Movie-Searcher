import { MOVIES_ADD, FAV_ADD, FAV_REMOVE } from './actionsTypes';

export const addMovies = (newElement: MoviesList[]) => ({
    type: MOVIES_ADD,
    payload: newElement,
});

export const addFavorite = (id: number) => ({
    type: FAV_ADD,
    payload: id,
});

export const removeFavorite = (id: number) => ({
    type: FAV_REMOVE,
    payload: id,
});
