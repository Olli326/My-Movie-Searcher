import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MovieList } from './components/list/movie-list';

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
