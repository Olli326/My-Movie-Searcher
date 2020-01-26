import React, { useState, useEffect } from 'react';
import { MovieItem } from './movie-item';

export const MovieList = () => {
    const [infoMovies, setInfoMovies] = useState<any>([]);

    useEffect(() => {
        fetch('https://devlab.website/v1/movies')
            .then(response => response.json())
            .then(json => {
                setInfoMovies(
                    json.map((item: any) => {
                        return <MovieItem {...item} key={item.id} />;
                    })
                );
            });
    }, []);

    return <div className='list'>{infoMovies}</div>;
};
