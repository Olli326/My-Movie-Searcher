import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MovieList } from './components/List/MovieList';

import { Container } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <Container>
                <MovieList />
            </Container>
        </div>
    );
};

export default App;
