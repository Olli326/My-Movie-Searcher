import React from 'react';
import './App.css';
import { FavoriteList } from './components/list/FavoriteList';
import { Header } from './components/Header/Header';
import { MovieList } from './components/List/MovieList';

import { Container } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <Container>
                <MovieList />
                <FavoriteList />
            </Container>
        </div>
    );
};

export default App;
