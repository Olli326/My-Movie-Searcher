import React from 'react';

export const MovieItem = (props: any) => {
    const infoMovie = props.infoMovie;

    return (
        <div className='list__item'>
            <div>
                <b>ID:</b> {infoMovie.id}
            </div>
            <div>
                <b>Title:</b> {infoMovie.title}
            </div>
            <div>
                <b>imdb_id:</b> {infoMovie.imdb_id}
            </div>
            <div>
                <b>Overview:</b> {infoMovie.overview}
            </div>
            <div>
                <b>Genres:</b> {infoMovie.genres}
            </div>
            <div>
                <b>Revenue:</b> {infoMovie.revenue}
            </div>
            <div>
                <b>Duration:</b> {infoMovie.duration}
            </div>
            <div>
                <b>Likes:</b> {infoMovie.likes}
            </div>
            <div>
                <b>Vote average:</b> {infoMovie.vote_average}
            </div>
            <div>
                <b>Vote count:</b> {infoMovie.vote_count}
            </div>
            <div>
                <b>Director:</b> {infoMovie.director}
            </div>
            <div>
                <b>Poster:</b> {infoMovie.poster_path}
            </div>
            <div>
                <b>Release date:</b> {infoMovie.release_date}
            </div>
        </div>
    );
};
