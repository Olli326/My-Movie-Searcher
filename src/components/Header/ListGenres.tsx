import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { listGenres } from '../../selectors/selectors';
import { filtreGenre } from '../../reduxSetup/actions';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const ListGenres = () => {
    const [state, setState] = useState<any>({});
    const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.checked });
    };

    const infoMovies = useSelector<RootStore, MoviesList[]>(state => state.list);
    const allGenres = listGenres(infoMovies);

    return (
        <>
            <Typography variant='h5' component='h2'>
                Filtre
            </Typography>

            {allGenres &&
                allGenres.map(item => {
                    return (
                        <FormControlLabel
                            control={<Checkbox checked={state.item} onChange={handleChange(item)} value={item} />}
                            label={item}
                        />
                    );
                })}
        </>
    );
};
