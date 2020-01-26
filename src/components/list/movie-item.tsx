import React, { useState } from 'react';

export const MovieItem = (props: any) => {
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
    } = props;
    const [isFavor, setFavor] = useState('');
    const [textBtn, setTextBtn] = useState('Like it');

    return (
        <div className='list__item' data-favor={`${isFavor}`}>
            <div>
                <b>ID:</b> {id}
            </div>
            <div>
                <b>Title:</b> {title}
            </div>
            <div>
                <b>imdb_id:</b> {imdb_id}
            </div>
            <div>
                <b>Overview:</b> {overview}
            </div>
            <div>
                <b>Genres:</b> {genres.join(', ')}
            </div>
            <div>
                <b>Revenue:</b> {revenue}
            </div>
            <div>
                <b>Duration:</b> {duration}
            </div>
            <div>
                <b>Likes:</b> {likes}
            </div>
            <div>
                <b>Vote average:</b> {vote_average}
            </div>
            <div>
                <b>Vote count:</b> {vote_count}
            </div>
            <div>
                <b>Director:</b> {director}
            </div>
            <div>
                <b>Poster:</b> {poster_path}
            </div>
            <div>
                <b>Release date:</b> {release_date}
            </div>

            <button
                onClick={() => {
                    if (isFavor === '') {
                        setFavor('yes');
                        setTextBtn("Don't like it");
                    } else {
                        setFavor('');
                        setTextBtn('Like it');
                    }
                }}
            >
                {`${textBtn}`}
            </button>
        </div>
    );
};
