import React from 'react';
import { useSelector } from 'react-redux';
import { MovieItem } from './MovieItem';

export const MovieList = () => {
    const infoMovies = useSelector<RootStore, MoviesList[]>(state => state.list);

    return (
        <div className='list'>
            {infoMovies &&
                infoMovies.map(item => {
                    return <MovieItem {...item} key={item.id} />;
                })}
        </div>
    );
};
