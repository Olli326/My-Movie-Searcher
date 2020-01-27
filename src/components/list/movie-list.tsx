import React, { useState, useEffect } from 'react';
import { MovieItem, MovieItemT } from './movie-item';
import { MOVIES_URL } from '../../constants';

export const MovieList = () => {
    const [infoMovies, setInfoMovies] = useState<MovieItemT[]>([]);

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(response => response.json())
            .then(json => {
                setInfoMovies(json);
            });
    }, []);

    return (
        <div className='list'>
            {infoMovies.map(item => {
                return <MovieItem {...item} key={item.id} />;
            })}
        </div>
    );
};
