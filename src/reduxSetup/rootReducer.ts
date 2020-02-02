import { MOVIES_ADD, FAV_ADD, FAV_REMOVE } from './actionsTypes';

//const initialState: RootStore = { list: [], favorite: [] };
const initialState: RootStore = { list: [] };

const actionHanlder = new Map<string, RootReducer>([
    [
        MOVIES_ADD,
        (state, action: Action<MoviesList>) => {
            const { list } = state;
            return {
                list: [...list, action.payload],
            };
        },
    ],
    [
        FAV_ADD,
        (state, action: Action<ActionsT>) => {
            const { list } = state;
            return {
                list: list.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            isFav: true,
                        };
                    } else {
                        return item;
                    }
                }),
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
