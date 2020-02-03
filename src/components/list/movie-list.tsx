import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovies } from '../../reduxSetup/actions';
import { MovieItem } from './movie-item';
import { MOVIES_URL } from '../../constants';

export const MovieList = () => {
    const infoMovies = useSelector<RootStore, MoviesList[]>(state => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${MOVIES_URL}/v1/movies`)
            .then(response => response.json())
            .then(json => {
                dispatch(addMovies(json));
            });
    }, []);
    return (
        <div className='list'>
            {infoMovies &&
                infoMovies.map(item => {
                    return <MovieItem {...item} key={item.id} />;
                })}
        </div>
    );
};
