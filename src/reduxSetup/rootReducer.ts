import { MOVIES_ADD, FAV_ADD, MOVIE_SEARCH, MOVIE_FILTRE_GENRE } from './actionsTypes';

const initialState: RootStore = { list: [] };

const actionHanlder = new Map<string, RootReducer>([
    [
        MOVIES_ADD,
        (state, action: Action<ActionsT>) => {
            return {
                list: action.payload,
            };
        },
    ],
    [
        FAV_ADD,
        (state, action: Action<ActionsT>) => {
            return {
                ...state,
                list: state.list.map((movie: MoviesList) => {
                    return movie.id === action.payload ? { ...movie, isFavorite: !movie.isFavorite } : movie;
                }),
            };
        },
    ],
    [
        MOVIE_SEARCH,
        (state, action: Action<ActionsT>) => {
            return {
                ...state,
                list: state.list.filter((movie: MoviesList) =>
                    movie.title.toUpperCase().includes(action.payload.toUpperCase())
                ),
            };
        },
    ],
    [
        MOVIE_FILTRE_GENRE,
        (state, action: Action<ActionsT>) => {
            return {
                ...state,
                list: state.list.filter((movie: MoviesList) => movie.genres.includes(action.payload)),
            };
        },
    ],
    ['DEFAULT_PLUG', (state: RootStore) => state],
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
    const reducerToFire = (actionHanlder.has(action.type)
        ? actionHanlder.get(action.type)
        : actionHanlder.get('DEFAULT_PLUG')) as RootReducer;

    return reducerToFire(state, action);
}
