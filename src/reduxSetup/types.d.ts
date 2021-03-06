type MoviesList = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director?: string;
    poster_path?: string;
    release_date: string;
    isFavorite?: boolean;
};

type RootStore = { list: MoviesList[]; search: [] | any; genres: [] | any };

type Action<T> = { type: string; payload: T };

type ActionsT = typeof MOVIES_ADD | typeof MOVIES_ALL_ADD | 'DEFAULT_PLUG';

type RootReducer<T = ActionsT> = (state: RootStore, action: Action<T>) => RootStore;
