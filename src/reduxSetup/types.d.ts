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
    isFav?:boolean;
};

type RootStore = { list: MoviesList[] };

type Action<T> = { type: string; payload: T };

type ActionsT = typeof MOVIES_ADD | 'DEFAULT_PLUG';

type RootReducer<T = ActionsT> = (state: RootStore, action: Action<T>) => RootStore;
