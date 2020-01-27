import React, { useState } from 'react';
import { YES, LIKE_IT, DONT_LIKE_IT } from '../../constants';

export type MovieItemT = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director?: string;
    poster_path?: string;
    release_date: string;
};

export const MovieItem = (props: MovieItemT) => {
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
    const [isFavor, setFavor] = useState(false);

    return (
        <div className='list__item' data-favor={isFavor ? YES : ``}>
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
                    setFavor(!isFavor);
                }}
            >
                {isFavor ? DONT_LIKE_IT : LIKE_IT}
            </button>
        </div>
    );
};
