import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

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
    })
);

export function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            My-Movie-Searcher
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
