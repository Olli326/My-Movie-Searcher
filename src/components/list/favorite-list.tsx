import React from 'react';
import { useSelector } from 'react-redux';
import { MovieItem } from './movie-item';
import { favoriteMovies } from '../../selectors/selectors';

import Typography from '@material-ui/core/Typography';

export const FavoriteList = () => {
    const infoMovies = useSelector<RootStore, MoviesList[]>(state => state.list);
    const allFavoriteMovies = favoriteMovies(infoMovies);
    if (allFavoriteMovies.length > 0) {
        return (
            <>
                <Typography variant='h5' component='h2'>
                    My Favorite
                </Typography>
                <div className='list'>
                    {allFavoriteMovies &&
                        allFavoriteMovies.map(item => {
                            return <MovieItem {...item} key={item.id} />;
                        })}
                </div>
            </>
        );
    } else {
        return (
            <>
                <Typography variant='h5' component='h2'>
                    No favorites
                </Typography>
            </>
        );
    }
};
