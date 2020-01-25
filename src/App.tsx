import React from 'react';
import './App.css';
import { MovieList } from './components/list/movie-list';

const App: React.FC = () => {
    return (
        <div className='App'>
            <MovieList />
        </div>
    );
};

export default App;
