import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MovieList } from './components/List/MovieList';
import { FavoriteList } from './components/List/FavoriteList';
import { ListGenres } from './components/Header/ListGenres';

import { Container } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <Container>
                <ListGenres />
                <MovieList />
                <FavoriteList />
            </Container>
        </div>
    );
};

export default App;
