import React, { useState, ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../reduxSetup/actions';

import { fade, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            background: 'white',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
        margin: {
            margin: theme.spacing(1),
        },
    })
);

export function Header() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('');
    const handleTitleChange = useCallback(e => setTitle(e.currentTarget.value), []);
    // useCallback(e => setValue(e.target.value), []);
    const resetInputField = () => {
        setTitle('');
    };

    const searchMovie = () => {
        if (title) {
            dispatch(searchMovies(title));
            resetInputField();
        }
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            My-Movie-Searcher
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder='Search…'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleTitleChange}
                                value={title}
                            />
                        </div>
                        <Button
                            onClick={searchMovie}
                            variant='contained'
                            size='medium'
                            color='primary'
                            className={classes.margin}
                        >
                            Search
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
