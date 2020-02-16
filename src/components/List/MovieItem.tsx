import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../reduxSetup/actions';
import { API_URL } from '../../constants/api';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    card: {
        maxWidth: 390,
        margin: '10px 0',
    },
    media: {
        height: 160,
        width: 'auto',
    },
    action: {
        display: 'flex',
        alignItems: 'flex-start',
    },
});

export const MovieItem = (props: MoviesList) => {
    const {
        id,
        title,
        imdb_id,
        overview,
        genres,
        revenue,
        duration,
        likes,
        vote_average,
        vote_count,
        director,
        poster_path,
        release_date,
        isFavorite,
    } = props;

    const dispatch = useDispatch();

    const setFavor = () => {
        dispatch(addFavorite(id));
    };

    const classes = useStyles();

    return (
        <Grid item xs={4}>
            <Card className={classes.card}>
                <CardActionArea className={classes.action}>
                    <CardMedia component='img' className={classes.media} image={`${API_URL}${poster_path}`} />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {title}
                        </Typography>
                        {/* <Typography variant='body2' color='textSecondary' component='p'>
                            {id}
                        </Typography> */}
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {overview}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>imdb_id:</b> {imdb_id}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Genres:</b> {genres.join(', ')}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Revenue:</b> {revenue}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Duration:</b> {duration}
                        </Typography>
                        {/* <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Likes:</b> {likes}
                        </Typography> */}
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Vote average:</b> {vote_average}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Vote count:</b> {vote_count}
                        </Typography>
                        {/* <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Director:</b> {director}
                        </Typography> */}
                        <Typography variant='body2' color='textSecondary' component='p'>
                            <b>Release date:</b> {release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton onClick={setFavor} color={isFavorite ? 'secondary' : 'default'}>
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};
