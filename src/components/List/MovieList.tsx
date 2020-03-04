import React from 'react';
import { useSelector } from 'react-redux';
import { MovieItem } from './MovieItem';
import { selectMovies } from '../../selectors/selectors';

export const MovieList = () => {
    const infoMovies = useSelector<RootStore, MoviesList[]>(selectMovies);

    return (
        <div className='list'>
            {infoMovies &&
                infoMovies.map(item => {
                    return <MovieItem {...item} key={item.id} />;
                })}
        </div>
    );
};
