import React, { useState, useEffect } from 'react';
import { MovieItem } from './movie-item';

export const MovieList = () => {
    const [infoMovies, setInfoMovie] = useState<any>([]);

    useEffect(() => {
        fetch('movies.json')
            .then(response => response.json())
            .then(json => {
                setInfoMovie(
                    json.map((item: any) => {
                        return <MovieItem {...item} key={item.id} />;
                    })
                );
            });
    }, []);

    return <div className='list'>{infoMovies}</div>;
};
