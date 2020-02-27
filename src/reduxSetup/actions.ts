import { MOVIES_ADD, FAV_ADD } from './actionsTypes';

export const addMovies = (newElement: MoviesList[]) => ({
    type: MOVIES_ADD,
    payload: newElement,
});

export const addFavorite = (id: number) => ({
    type: FAV_ADD,
    payload: id,
});
